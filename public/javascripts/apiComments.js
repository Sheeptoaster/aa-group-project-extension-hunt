document.querySelector("#create-comment").addEventListener("click", async(event => {
	// Call POST /api/comments
	const addCommentForm = document.querySelector('#add-comment-form')
	const formData = new FormData(addCommentForm)
	const content = formData.get('content')
	const extensionId = formData.get('extensionId')
	let res = await fetch("/api/comments", {
		method: "POST",
		header: "application/json",
		body: {
			content,
			extensionId
		}
	})

	const data = await res.json();
	if (!data.error) {
		const { username } = data;
		const contentContainer = document.querySelector('#content-container')
		const div = document.createElement('div') //TODO replace with styled comment html
		div.appendChild(`<h1>${username}, ${content}</h1>`)
		contentContainer.appendChild(div)
	} else {
		// display errors dynamically
		document.querySelector("#comment-errors").appendChild(data.error);
	}
}))
