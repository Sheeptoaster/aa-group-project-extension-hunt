document.querySelector("#create-comment").addEventListener("click", async event => {
	event.preventDefault();
	// Call POST /api/comments
	const addCommentForm = document.querySelector('#add-comment-form')
	const formData = new FormData(addCommentForm)
	const content = formData.get('content')
	const csrf = formData.get('_csrf')
	const extensionId = window.location.href.split("/")[4];
	let res = await fetch("/api/comments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			content,
			extensionId,
			_csrf: csrf
		})
	})

	const data = await res.json();
	if (!data.error) {
		const { username } = data;
		const contentContainer = document.querySelector('#content-container') //TODO #61 create comment styling
		const div = document.createElement('div');
		const usernameElement = document.createElement("h2");
		usernameElement.innerText = username;
		div.appendChild(usernameElement);
		const contentElement = document.createElement("span");
		contentElement.innerText = content;
		div.appendChild(contentElement);
		contentContainer.appendChild(div)
	} else {
		// display errors dynamically
		console.log(data.error);
		// document.querySelector("#comment-errors").appendChild(); //TODO #62 create dispaly for comment error message
	}
})
