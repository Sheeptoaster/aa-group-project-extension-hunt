const loginButton = document.querySelector('#login-button')
const cancelPopupButton = document.querySelector("#cancel-popup-button")
const loginBackground = document.querySelector("#login-popup-background");
const loginSignup = document.querySelector('#login-from-signup')
const demoSignin = document.querySelector("#demo-sign-in");

if (loginSignup) {
	loginSignup.addEventListener("click", async event => {
		const popupElement = document.querySelector('#login-popup')
		popupElement.classList.remove("hidden");
		loginBackground.classList.remove('hidden');
	})
}
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

if (cancelPopupButton) {
	cancelPopupButton.addEventListener("click", async event => {
		event.preventDefault();
		closeLoginPopup();
	})
}

if (loginBackground) {
	loginBackground.addEventListener("click", async event => {
		document.querySelector('#login-popup').classList.add("hidden");
		closeLoginPopup();
	})
}

function loginDOM(user) {
	// Update navbar
	const navBarLeft = document.querySelector('#nav-bar-left')
	navBarLeft.innerHTML += `<a href="/extensions/new"> Post an Extension </a>`
	const welcomeContainer = document.querySelector('#nav-bar-right')
	welcomeContainer.innerHTML = `
		<span>Welcome ${user.firstName}</span>
		<a href="/profiles/${user.id}">Profile</a>
		<form action="/users/logout" method="POST">
			<button class="cta-button logout-button" type="submit">Logout</button>
		</form>
	` //TODO #157 double logout bug

	// Add upvote button borders
	const upvoteButtons = document.querySelectorAll(".upvote-container");
	upvoteButtons.forEach(button => {
		button.setAttribute("style", "border: 1px solid rgba(0,0,0,.2)");
	})

	// Comment avatar displayed on login
	const userAvatar = document.querySelector("#user-avatar");
	if (userAvatar) {
		userAvatar.setAttribute("src", user.avatarURL);
	}

	// Edit button displayed on login
	const extensionEditBTN = document.querySelector('#edit-btn-extension');
	if (extensionEditBTN) {
		const extensionOwner = extensionEditBTN.getAttribute('owner');
		if (user.id == extensionOwner) {
			extensionEditBTN.classList.remove("hidden");
		}
	}

	// Comment send button is not grayed out when you log in
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

if (demoSignin) {
	demoSignin.addEventListener("click", async event => {
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
