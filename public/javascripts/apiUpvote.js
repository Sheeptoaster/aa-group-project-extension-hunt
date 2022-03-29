const ratingButtons = document.querySelectorAll('.rating-container') //TODONOW downvote-containers
const extensionRating = document.querySelector('#upvote-btn-extension') //TODONOW downvote on extension

ratingButtons.forEach(button => {
	button.addEventListener('click', async (event) => {
		const extensionId = button.getAttribute('extensionId')

		const res = await fetch('/api/rating/upvote', {
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

if(extensionRating) {
	extensionRating.addEventListener('click', async (event) => {
		const extensionId = extensionRating.getAttribute('extensionId')

		const res = await fetch('/api/rating/upvote', {
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
