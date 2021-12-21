document.querySelector("#create-comment").addEventListener("click", async event => {
	event.preventDefault();
	// Call POST /api/comments
	const commentInputElement = document.querySelector('#content')
	const addCommentForm = document.querySelector('#add-comment-form')
	const formData = new FormData(addCommentForm)
	const content = formData.get('content').trim(); //TODO #110 clear comment input after submission
	const csrf = formData.get('_csrf')
	const extensionId = window.location.href.split("/")[4];
	let res = await fetch("/api/comments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			content,
			extensionId,
			_csrf: csrf
		})
	})

	const data = await res.json();
	if (!data.error) {
		const { username, profileURL } = data;
		const contentContainer = document.querySelector('#content-container')
		const commentLi = document.createElement('li');
		commentLi.classList.add("comment-li");
		const commenterImg = document.createElement('img');
		commenterImg.setAttribute("src", profileURL);
		commenterImg.classList.add("comment-avatar-img");
		commentLi.appendChild(commenterImg);
		const usernameElement = document.createElement("h2");
		usernameElement.classList.add("comment-username");
		usernameElement.innerText = username;
		commentLi.appendChild(usernameElement);
		const contentElement = document.createElement("span");
		contentElement.classList.add("comment-content");
		contentElement.innerText = content;
		commentLi.appendChild(contentElement);
		contentContainer.appendChild(commentLi)
		commentInputElement.value = ''
	} else {
		// display errors dynamically
		console.log(data.error);
		// document.querySelector("#comment-errors").appendChild(); //TODO #62 create dispaly for comment error message
	}
})
