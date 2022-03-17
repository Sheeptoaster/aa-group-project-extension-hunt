const loginSignup = document.querySelector('#login-from-signup')
if (loginSignup) {
	loginSignup.addEventListener("click", async event => {
		const popupElement = document.querySelector('#login-popup')
		popupElement.classList.remove("hidden");
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

const cancelPopupButton = document.querySelector("#cancel-popup-button");
if (cancelPopupButton) {
	cancelPopupButton.addEventListener("click", async event => {
		event.preventDefault();
		closeLoginPopup();
	})
}

const loginBackground = document.querySelector("#login-popup-background");
if (loginBackground) {
	loginBackground.addEventListener("click", async event => {
		document.querySelector('#login-popup').classList.add("hidden");
		closeLoginPopup();
	})
}

function loginDOM(user) {
	// Update navbar
	document.querySelector('#nav-bar-left').innerHTML += `<a href="/extensions/new"> Post an Extension </a>`;
	document.querySelector('#nav-bar-right').innerHTML = `
		<span>Welcome ${user.firstName}</span>
		<a href="/profiles/${user.id}">Profile</a>
		<form action="/users/logout" method="POST">
			<button class="cta-button" type="submit">Logout</button>
		</form>`;

	// Activate upvote buttons on home page
	document.querySelectorAll(".upvote-container").forEach(button => {
		button.classList.remove("upvote-inactive");
		button.classList.add("upvote-active");
	})

	// Change extension page's comment avatar to user's avatar
	const userAvatar = document.querySelector("#user-avatar");
	if (userAvatar) {
		userAvatar.setAttribute("src", user.avatarURL);
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
	const loginForm = document.querySelector('#login-form')
	const loginData = new FormData(loginForm)
	const username = loginData.get('username')
	const password = loginData.get('password')
	const csrf = loginData.get('_csrf')
	let res = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username,
			password,
			_csrf: csrf
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
		event.preventDefault()
		const loginForm = document.querySelector('#login-form')
		const loginData = new FormData(loginForm)
		const csrf = loginData.get('_csrf')
		const extensionId = window.location.href.split("/")[4]
		let res = await fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				extensionId,
				username: "Demo User",
				password: "a",
				_csrf: csrf
			})
		})
		const data = await res.json()

		if (!data.errors) {
			loginDOM(data.user);
		}
	})
}
