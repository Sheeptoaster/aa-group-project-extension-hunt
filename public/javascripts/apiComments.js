document.querySelector("#create-comment").addEventListener("click", async (event => {
	// Call POST /api/comments
	// let commentInput = document.querySelector("#comment-input");
	const addCommentForm = document.querySelector('#add-comment-form')
	const formData = new FormData(addCommentForm)
	const content = formData.get('content')
	const extensionId = formData.get('extensionId')
	const userId = formData.get('userId')
	let res = await fetch("/api/comments", {
		method: "POST",
		header: "application/json",
		body: {
			content,
			extensionId,
			userId
		}
	})

	// const { content, userId } = await res.json();
	const contentContainer = document.querySelector('#content-container')
	const div = document.createElement('div')
	div.appendChild(`<h1>${userId}, ${content}</h1>`)
	contentContainer.appendChild(div)
}))
