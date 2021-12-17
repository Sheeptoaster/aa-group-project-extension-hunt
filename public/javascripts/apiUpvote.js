const upvoteButton = document.querySelector('.upvote-container')

upvoteButton.addEventListener('click', async (event) => {

    const extensionId = upvoteButton.getAttribute('extensionId')

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
    const upvoteElement = document.getElementById(`${extensionId}`)
    upvoteElement.innerText = data.upvotes

})
