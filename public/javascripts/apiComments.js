/** Change the comment action menu to edit (confirm) and cancel
 * @param {Event} event
 */
function startEdit(event) {
	const attributeSelector = `[comment-id='${event.target.getAttribute("comment-id")}']`;
	const edit = document.querySelector(".comment-content" + attributeSelector);
	edit.classList.add("comment-edit-input")
	edit.setAttribute('contenteditable', 'true')

	for (const buttonQuery of [".comment-start-edit", ".comment-start-delete"]) {
		document.querySelector(buttonQuery + attributeSelector).classList.add("hidden");
	}

	for (const buttonQuery of [".comment-cancel-action", ".comment-confirm-edit"]) {
		document.querySelector(buttonQuery + attributeSelector).removeAttribute("hidden");
	}
}

document.querySelectorAll(".comment-start-edit").forEach(button => {
	button.addEventListener("click", startEdit);
})

/** Change the comment action menu to delete (confirm) and cancel
 * @param {Event} event
 */
function startDelete(event) {
	const attributeSelector = `[comment-id='${event.target.getAttribute("comment-id")}']`;

	for (const buttonQuery of [".comment-start-edit", ".comment-start-delete"]) {
		document.querySelector(buttonQuery + attributeSelector).classList.add("hidden");
	}

	for (const buttonQuery of [".comment-confirm-delete", ".comment-cancel-action"]) {
		document.querySelector(buttonQuery + attributeSelector).removeAttribute("hidden");
	}
}

document.querySelectorAll(".comment-start-delete").forEach(button => {
	button.addEventListener("click", startDelete);
})

/** Confirm a comment edit
 * @param {Event} event
 */
function confirmEdit(event) {
	const id = event.target.getAttribute("comment-id");
	const attributeSelector = `[comment-id='${id}']`;
	document.querySelector(".comment-cancel-action" + attributeSelector).setAttribute('hidden', '');
	event.target.setAttribute("hidden", "");

	for (const buttonQuery of [".comment-start-edit", ".comment-start-delete"]) {
		document.querySelector(buttonQuery + attributeSelector).classList.remove("hidden");
	}

	const editText = document.querySelector(".comment-content" + attributeSelector);
	if (editText !== null) {
		editText.classList.remove('comment-edit-input');
		editText.setAttribute('contenteditable', 'false');
		editText.setAttribute("original-content", editText.innerText);
		const formData = new FormData(document.querySelector('#add-comment-form'));
		fetch(`/api/comments/${id}/edit`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content: editText.innerText,
				_csrf: formData.get('_csrf'),
			}),
		})
	}
}

document.querySelectorAll(".comment-confirm-edit").forEach(button => {
	button.addEventListener("click", confirmEdit);
})

/** Confirm the deletion of a comment
 * @param {Event} event
 */
function confirmDelete(event) {
	const id = event.target.getAttribute("comment-id");
	const removed = document.querySelector(`#comment${id}`);
	console.log(removed);
	if (removed !== null) {
		removed.remove()
	}

	const formData = new FormData(document.querySelector(`#add-comment-form`));
	fetch(`/api/comments/${id}/delete`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			_csrf: formData.get('_csrf'),
		}),
	})
}

document.querySelectorAll(".comment-confirm-delete").forEach(button => {
	button.addEventListener("click", confirmDelete);
})

/** Cancel the editing or deletion of a comment
 * @param {Event} event
 */
function cancelAction(event) {
	const id = event.target.getAttribute("comment-id");
	const attributeSelector = `[comment-id='${id}']`;
	const editText = document.querySelector(".comment-content" + attributeSelector);
	editText.innerText = editText.getAttribute("original-content");
	editText.classList.remove('comment-edit-input');
	editText.setAttribute('contenteditable', 'false');

	for (const buttonQuery of [".comment-start-edit", ".comment-start-delete"]) {
		document.querySelector(buttonQuery + attributeSelector).classList.remove('hidden');
	}

	for (const buttonQuery of [".comment-confirm-edit", ".comment-confirm-delete", ".comment-cancel-action"]) {
		document.querySelector(buttonQuery + attributeSelector).setAttribute("hidden", "");
	}
}

document.querySelectorAll(".comment-cancel-action").forEach(button => {
	button.addEventListener("click", cancelAction);
})

document.querySelector("#send-comment").addEventListener("click", async event => {
	event.preventDefault();
	// Call POST /api/comments
	const commentInputElement = document.querySelector('#content')
	const addCommentForm = document.querySelector('#add-comment-form')
	const formData = new FormData(addCommentForm)
	const content = formData.get('content').trim();
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
		commentLi.id = `comment${data.id}`;
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
		contentElement.setAttribute("comment-id", data.id);
		contentElement.innerText = content;
		commentInputElement.value = '';

		const commentDiv = document.createElement('div');
		commentDiv.classList.add("comment-btns");

		const submitBtn = document.createElement("button");
		submitBtn.classList.add("comment-confirm-edit");
		submitBtn.classList.add("cta-button");
		submitBtn.setAttribute("comment-id", data.id);
		submitBtn.setAttribute("hidden", "");
		submitBtn.innerText = "Save";
		submitBtn.addEventListener("click", confirmEdit);

		const cancelBtn = document.createElement("button");
		cancelBtn.classList.add("comment-cancel-action");
		cancelBtn.setAttribute("comment-id", data.id);
		cancelBtn.setAttribute("hidden", "")
		cancelBtn.innerText = 'Cancel';
		cancelBtn.addEventListener("click", cancelAction);

		const deleteBtn = document.createElement("button");
		deleteBtn.classList.add("comment-confirm-delete");
		deleteBtn.classList.add("cta-danger-button");
		deleteBtn.setAttribute("comment-id", data.id);
		deleteBtn.setAttribute("hidden", "")
		deleteBtn.innerText = "Delete";
		deleteBtn.addEventListener("click", confirmDelete);

		const eTag = document.createElement('i');
		eTag.classList.add("fa");
		eTag.classList.add("fa-pencil");
		eTag.classList.add("comment-start-edit");
		eTag.setAttribute("comment-id", data.id);
		eTag.addEventListener("click", startEdit);

		const dTag = document.createElement('i');
		dTag.classList.add("fa");
		dTag.classList.add("fa-trash");
		dTag.classList.add("comment-start-delete");
		dTag.setAttribute("comment-id", data.id);
		dTag.addEventListener("click", startDelete);

		commentLi.append(submitBtn);
		commentLi.append(deleteBtn);
		commentLi.append(cancelBtn);
		commentDiv.appendChild(eTag);
		commentDiv.appendChild(dTag);
		commentLi.appendChild(commentDiv);
		commentLi.appendChild(contentElement);
		contentContainer.appendChild(commentLi);
	} else {
		// display errors dynamically
		console.log(data.error);
		// document.querySelector("#comment-errors").appendChild(); //TODO #62 create dispaly for comment error message
	}
})
