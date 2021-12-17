const loginButton = document.querySelector('#login-button')
const cancelPopupButton = document.querySelector("#cancel-popup-button")
const loginBackground = document.querySelector("#login-popup-background");
const loginSignup = document.querySelector('#login-from-signup')

if (loginSignup) {
	loginSignup.addEventListener("click", async event => {
		const popupElement = document.querySelector('#login-popup')
		popupElement.classList.remove("hidden");
	})
}
if (loginButton) {
	loginButton.addEventListener("click", async event => {
		document.querySelector('#login-popup').classList.remove("hidden");
		loginBackground.classList.remove("hidden");
	})
}

if (cancelPopupButton) {
	cancelPopupButton.addEventListener("click", async event => {
		document.querySelector('#login-popup').classList.add("hidden");
		loginBackground.classList.add("hidden");
	})
}

if (loginBackground) {
	loginBackground.addEventListener("click", async event => {
		document.querySelector('#login-popup').classList.add("hidden");
		loginBackground.classList.add("hidden");
	})
}

document.querySelector("#login-submit").addEventListener("click", async event => { //TODO #83 pressing enter to submit login does not clear grey login background
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
            <div>
                <span> Welcome ${data.user.firstName} </span>
                <form action="/users/logout" method="POST">
                    <button type="submit">Logout</button>
                </form>
            </div>
        `
		//hide the login popup again
		const popupElement = document.querySelector('#login-popup')
		popupElement.classList.add("hidden");
	} else {
		const usernameErrors = document.querySelector('#username-errors');
		usernameErrors.innerText = data.errors.usernameErrors[0];
		usernameErrors.classList.remove("hidden");
		const passwordErrors = document.querySelector("#password-errors");
		passwordErrors.innerText = data.errors.passwordErrors[0];
		passwordErrors.classList.remove("hidden");
	}
})

document.querySelector("#demo-sign-in").addEventListener("click", async event => {
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
