export async function upvote(event) {
	let extensionId = event.target.getAttribute('extensionId');
	if (extensionId === null) {
		extensionId = event.target.parentNode.getAttribute('extensionId');

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
			event.target.parentNode.classList.remove("upvote");
			event.target.parentNode.classList.add("downvote");
			event.target.parentNode.removeEventListener("click", upvote);
			event.target.parentNode.addEventListener("click", downvote);

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
	} else {
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
}

export async function downvote(event) {
	let extensionId = event.target.getAttribute('extensionId')
	if (extensionId === null) {
		extensionId = event.target.parentNode.getAttribute('extensionId')

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
			event.target.parentNode.classList.remove("downvote");
			event.target.parentNode.classList.add("upvote");
			event.target.parentNode.removeEventListener("click", downvote);
			event.target.parentNode.addEventListener("click", upvote);

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
	} else {
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
}


// Home page
document.querySelectorAll('.rating-container').forEach(button => {
	if (button.classList.contains("upvote")) {
		button.addEventListener('click', upvote);
		button.removeEventListener("click", downvote);
	} else {
		button.addEventListener('click', downvote);
		button.removeEventListener("click", upvote);
	}
})

// Extension Page
const extensionRating = document.querySelector('#upvote-btn-extension');
if (extensionRating) {
	if (extensionRating.classList.contains("upvote")) {
		extensionRating.removeEventListener("click", downvote);
	} else {
		extensionRating.addEventListener('click', downvote);
		extensionRating.removeEventListener("click", upvote);
	}
}
