const loginButton = document.querySelector('#login-button')
const cancelPopupButton = document.querySelector("#cancel-popup-button")

if (loginButton){
    loginButton.addEventListener("click", async event => {
        const popupElement = document.querySelector('#login-popup')
        popupElement.classList.remove("hidden");
})
}
if (cancelPopupButton) {
    cancelPopupButton.addEventListener("click", async event => {
        const popupElement = document.querySelector('#login-popup')
        popupElement.classList.add("hidden");
    })
}

document.querySelector("#login-submit").addEventListener("click", async event =>{
    event.preventDefault()
    const loginForm = document.querySelector('#login-form')
    const loginData = new FormData(loginForm)
    console.log('in the login submit event listener', loginData)
    const username = loginData.get('username')
    const password = loginData.get('password')
    let res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    const data = await res.json()
    console.log(data.user)

    //DOM manipulate login and signout. replace with logout
    const welcomeContainer = document.querySelector('#welcome-container')
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
})