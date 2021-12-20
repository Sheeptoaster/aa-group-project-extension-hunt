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
		//DOM manipulate login and signout. replace with logout
		const welcomeContainer = document.querySelector('#nav-bar-right')
		welcomeContainer.innerHTML = `
		<span>Welcome ${data.user.firstName}</span>
		<a href="/profiles/${data.user.id}">Profile</a>
		<form action="/users/logout" method="POST">
			<button type="submit">Logout</button>
		</form>
	`
		//hide the login popup again
		const popupElement = document.querySelector('#login-popup')
		popupElement.classList.add("hidden");
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
		let res = await fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: "Demo User",
				password: "a",
				_csrf: csrf
			})
		})
		const data = await res.json()

		if (!data.errors) {
			//DOM manipulate login and signout. replace with logout
			const welcomeContainer = document.querySelector('#nav-bar-right')
			welcomeContainer.innerHTML = `
			<span>Welcome ${data.user.firstName}</span>
			<a href="/profiles/51">Profile</a>
			<form action="/users/logout" method="POST">
			<button type="submit">Logout</button>
			</form>
			`
		}
	})
}
