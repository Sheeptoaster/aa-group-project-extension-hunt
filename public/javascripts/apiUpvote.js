const upvoteButtons = document.querySelectorAll('.upvote-container')
const extensionUpvote = document.querySelector('#upvote-btn-extension')

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
			const upvoteElement = document.getElementById(`${extensionId}`);
			upvoteElement.innerText = data.upvotes;
		}
	})
})

if(extensionUpvote) {
	extensionUpvote.addEventListener('click', async (event) => {
		const extensionId = extensionUpvote.getAttribute('extensionId')

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
			const upvoteElement = document.querySelector(`.extension-upvotes`)
			upvoteElement.innerText = data.upvotes
		}
	})
}
