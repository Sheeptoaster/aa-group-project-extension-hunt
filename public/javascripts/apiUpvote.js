const upvoteButtons = document.querySelectorAll('.upvote-container')

upvoteButtons.forEach(button => {
	button.addEventListener('click', async (event) => {
		const extensionId = button.getAttribute('extensionId')

		const res = await fetch('/api/upvote', {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				extensionId
			})
		})
		const data = await res.json()
		if (data.upvotes) {
			const upvoteElement = document.getElementById(`${extensionId}`)
			upvoteElement.innerText = data.upvotes
		}
	})
})
