const ratingButtons = document.querySelectorAll('.rating-container');
const extensionRating = document.querySelector('#upvote-btn-extension');

async function upvote(event) {
	const extensionId = event.target.getAttribute('extensionId');
	console.log(extensionId);
	const res = await fetch('/api/rating/upvote', {
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			extensionId
		})
	})
	const data = await res.json();
	if (data.upvotes) {
		event.target.classList.remove("upvote");
		event.target.classList.add("downvote");
		event.target.removeEventListener("click", upvote);
		event.target.addEventListener("click", downvote);

		const upvoteElement = document.getElementById(extensionId);
		if (upvoteElement) {
			upvoteElement.innerText = data.upvotes;
		}
		const upvoteButtonText = document.getElementById("upvote-btn-text");
		if (upvoteButtonText) {
			upvoteButtonText.innerText = "Downvote";
			const ratingText = document.querySelector(".upvotes");
			ratingText.innerText = data.upvotes;
		}
	}
}

async function downvote(event) {
	const extensionId = event.target.getAttribute('extensionId')

	const res = await fetch('/api/rating/downvote', {
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			extensionId
		})
	})
	const data = await res.json();
	if (data.upvotes !== undefined) {
		event.target.classList.remove("downvote");
		event.target.classList.add("upvote");
		event.target.removeEventListener("click", downvote);
		event.target.addEventListener("click", upvote);

		const upvoteElement = document.getElementById(extensionId);
		if (upvoteElement) {
			upvoteElement.innerText = data.upvotes;
		}
		const upvoteButtonText = document.getElementById("upvote-btn-text");
		if (upvoteButtonText) {
			upvoteButtonText.innerText = "Upvote";
			const ratingText = document.querySelector(".upvotes");
			ratingText.innerText = data.upvotes;
		}
	}
}

ratingButtons.forEach(button => {
	if (button.classList.contains("upvote")) {
		button.addEventListener('click', upvote);
	} else {
		button.addEventListener('click', downvote);
	}
})

if (extensionRating) {
	if (extensionRating.classList.contains("upvote")) {
		extensionRating.addEventListener('click', upvote);
	} else {
		extensionRating.addEventListener('click', downvote);
	}
}
