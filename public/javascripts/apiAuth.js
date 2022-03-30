const loginBackground = document.querySelector("#login-popup-background");
if (loginBackground) {
	loginBackground.addEventListener("click", async event => {
		document.querySelector('#login-popup').classList.add("hidden");
		closeLoginPopup();
	})
}

const loginSignup = document.querySelector('#login-from-signup')
if (loginSignup) {
	loginSignup.addEventListener("click", async event => {
		document.querySelector('#login-popup').classList.remove("hidden");
		loginBackground.classList.remove('hidden');
	})
}

const loginButton = document.querySelector('#login-button')
if (loginButton) {
	loginButton.addEventListener("click", async event => {
		document.querySelector('#login-popup').classList.remove("hidden");
		loginBackground.classList.remove("hidden");
	})
}

function closeLoginPopup() {
	document.querySelector('#login-popup').classList.add("hidden");
	loginBackground.classList.add("hidden");
	const usernameErrors = document.querySelector('#username-errors');
	usernameErrors.innerHTML = "";
	usernameErrors.classList.add("hidden");
	const passwordErrors = document.querySelector("#password-errors");
	passwordErrors.innerHTML = "";
	passwordErrors.classList.add("hidden");
}

async function upvote(event) {
	const extensionId = event.target.getAttribute('extensionId');
	console.log(extensionId);
	const res = await fetch('/api/rating/upvote', {
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			extensionId
		})
	})
	const data = await res.json();
	if (data.upvotes) {
		event.target.classList.remove("upvote");
		event.target.classList.add("downvote");
		event.target.removeEventListener("click", upvote);
		event.target.addEventListener("click", downvote);

		const upvoteElement = document.getElementById(extensionId);
		if (upvoteElement) {
			upvoteElement.innerText = data.upvotes;
		}
		const upvoteButtonText = document.getElementById("upvote-btn-text");
		if (upvoteButtonText) {
			upvoteButtonText.innerText = "Downvote";
			const ratingText = document.querySelector(".upvotes");
			ratingText.innerText = data.upvotes;
		}
	}
}

async function downvote(event) {
	const extensionId = event.target.getAttribute('extensionId')

	const res = await fetch('/api/rating/downvote', {
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			extensionId
		})
	})
	const data = await res.json();
	if (data.upvotes !== undefined) {
		event.target.classList.remove("downvote");
		event.target.classList.add("upvote");
		event.target.removeEventListener("click", downvote);
		event.target.addEventListener("click", upvote);

		const upvoteElement = document.getElementById(extensionId);
		if (upvoteElement) {
			upvoteElement.innerText = data.upvotes;
		}
		const upvoteButtonText = document.getElementById("upvote-btn-text");
		if (upvoteButtonText) {
			upvoteButtonText.innerText = "Upvote";
			const ratingText = document.querySelector(".upvotes");
			ratingText.innerText = data.upvotes;
		}
	}
}

const cancelPopupButton = document.querySelector("#cancel-popup-button");
if (cancelPopupButton) {
	cancelPopupButton.addEventListener("click", async event => {
		event.preventDefault();
		closeLoginPopup();
	})
}

async function loginDOM(user) {
	// Update navbar
	const welcomeContainer = document.querySelector('#nav-bar-right')
	welcomeContainer.innerHTML = `
		<a class="secondary-button" id="publish-button" href="/extensions/new"> Post an Extension </a>
		<span>Welcome, ${user.firstName}</span>
		<div id="dropdown-text">
			<img class="maker-img" src=${user.avatarURL} alt=${user.username}/>
			<ul id="user-dropdown">
				<li class="dropdown-link">
					<a class="nav-anchor" href="/profiles/${user.id}">Profile</a>
				</li>
				<li class="dropdown-link">
					<form action="/users/logout" method="POST">
						<button class="cta-button logout-button" type="submit">Logout</button>
					</form>
				</li>
			</ul>
		</div>`;

	// Activate upvote buttons on home page
	document.querySelectorAll(".rating-container").forEach(async button => {
		button.classList.remove("rating-inactive");
		button.classList.add("rating-active");
		const res = await fetch("/api/rating/ratingtype", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				extensionId: button.getAttribute("extensionId"),
				userId: user.id
			})
		})
		const { isUpvote } = await res.json();
		if (isUpvote) {
			button.addEventListener("click", upvote);
		} else {
			button.addEventListener("click", downvote);
			button.classList.remove("upvote");
			button.classList.add("downvote");
		}
	})

	// Change extension page's comment avatar to user's avatar
	const userAvatar = document.querySelector("#user-avatar");
	if (userAvatar) {
		userAvatar.setAttribute("src", user.avatarURL);
	}

	// Activate upvote button on extension page
	const ratingButton = document.querySelector("#upvote-btn-extension");
	if (ratingButton) {
		ratingButton.disabled = false;
		const res = await fetch("/api/rating/ratingtype", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				extensionId: ratingButton.getAttribute("extensionId"),
				userId: user.id
			})
		})
		const { isUpvote } = await res.json();
		if (isUpvote) {
			ratingButton.addEventListener("click", upvote);
		} else {
			ratingButton.addEventListener("click", downvote);
			ratingButton.classList.remove("upvote");
			ratingButton.classList.add("downvote");
		}
	}

	// Add Edit Extension button to extension page
	const extensionEditBTN = document.querySelector('#edit-btn-extension');
	if (extensionEditBTN && user.id == extensionEditBTN.getAttribute('owner')) {
		extensionEditBTN.classList.remove("hidden");
	}

	// Enable extension page's send comment button
	const sendCommentButton = document.querySelector('#send-comment');
	if (sendCommentButton) {
		sendCommentButton.disabled = false;
	}
}

document.querySelector("#login-submit").addEventListener("click", async event => {
	event.preventDefault()
	const loginForm = document.querySelector('#login-form');
	const loginData = new FormData(loginForm);
	let res = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username: loginData.get('username'),
			password: loginData.get('password'),
			_csrf: loginData.get('_csrf')
		})
	})
	const data = await res.json()

	if (!data.errors) {
		loginDOM(data.user);
		closeLoginPopup();
	} else {
		if (data.errors.usernameErrors.length) {
			const usernameErrors = document.querySelector('#username-errors');
			usernameErrors.innerText = data.errors.usernameErrors.join(", ");
			usernameErrors.classList.remove("hidden");
		}
		if (data.errors.passwordErrors.length) {
			const passwordErrors = document.querySelector("#password-errors");
			passwordErrors.innerText = data.errors.passwordErrors.join(", ");
			passwordErrors.classList.remove("hidden");
		}
	}
})

const demoLogin = document.querySelector("#demo-sign-in");
if (demoLogin) {
	demoLogin.addEventListener("click", async event => {
		const loginForm = document.querySelector('#login-form');
		const loginData = new FormData(loginForm);
		let res = await fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: "Demo User",
				password: "a",
				_csrf: loginData.get('_csrf')
			})
		})
		const data = await res.json()

		if (!data.errors) {
			loginDOM(data.user);
		}
	})
}
