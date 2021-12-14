document.querySelector("#createComment").addEventListener("click", async (event => {
	// Call POST /api/comments
	let commentInput = document.querySelector("#commentInput");
	let res = await fetch("/api/comments", {
		method: "POST",
		header: "application/json",
		body: {
			content: commentInput.value,
			extensionId: "placeholder",
			userId: "placeholder"
		}
	})
	//TODONOW fetch comments container
	//TODONOW add comment to comments container
}))
