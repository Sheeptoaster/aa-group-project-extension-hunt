const loginButton = document.querySelector('#login-button')
const cancelPopupButton = document.querySelector("#cancel-popup-button")
const loginBackground = document.querySelector("#login-popup-background");

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
	console.log("return to event listener")
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
