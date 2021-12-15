document.querySelector("#create-comment").addEventListener("click", async event => {
	event.preventDefault();
	// Call POST /api/comments
	const addCommentForm = document.querySelector('#add-comment-form')
	const formData = new FormData(addCommentForm)
	const content = formData.get('content')
	const extensionId = formData.get('extensionId')
	let res = await fetch("/api/comments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			content,
			extensionId
		})
	})

	const data = await res.json();
	console.log("button click detected");
	if (!data.error) {
		const { username } = data;
		const contentContainer = document.querySelector('#content-container')
		const div = document.createElement('div') //TODO replace with styled comment html
		div.appendChild(`<h1>${username}, ${content}</h1>`)
		contentContainer.appendChild(div)
	} else {
		// display errors dynamically
		console.log("button click detected");
		document.querySelector("#comment-errors").appendChild(data.error);
	}
})
