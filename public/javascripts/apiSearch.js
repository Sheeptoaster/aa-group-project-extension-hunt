import { upvote, downvote } from "./apiUpvote.js";
const searchBar = document.querySelector("#navbar-search");

if (searchBar) {
	searchBar.addEventListener("keyup", async event => {
		if (event.target.value.trim().length) {
			const response = await fetch(`/extensions/search/${event.target.value.trim()}`);
			const { heading, extensions, authenticated, userId } = await response.json();
			const headingElement = document.querySelector("#extension-h2");
			headingElement.innerText = heading;
			const containerElement = document.querySelector("#extensions-container");
			while (containerElement.lastChild) {
				containerElement.removeChild(containerElement.lastChild);
			}

			extensions.forEach(extension => {
				const nameText = document.createElement("div");
				nameText.classList.add("extension-name");
				nameText.innerText = extension.name;

				const descriptionText = document.createElement("div");
				descriptionText.classList.add("extension-description");
				descriptionText.innerText = extension.slogan;

				const categoryContainer = document.createElement("div");
				categoryContainer.classList.add("category-container");
				extension.Categories.forEach(category => {
					const categoryElement = document.createElement("div");
					categoryElement.classList.add("category-name");
					categoryElement.innerText = category.name;
				})

				const textContainer = document.createElement("div");
				textContainer.classList.add("list-content");
				textContainer.appendChild(nameText);
				textContainer.appendChild(descriptionText);
				textContainer.appendChild(categoryContainer);

				const extensionImg = document.createElement("img");
				extensionImg.classList.add("list-img");
				extensionImg.setAttribute("src", extension.iconURL);
				extensionImg.setAttribute("alt", extension.name);

				const linkRegion = document.createElement("a");
				linkRegion.classList.add("extension-link");
				linkRegion.setAttribute("href", `/extensions/${extension.id}`);
				linkRegion.appendChild(extensionImg);
				linkRegion.appendChild(textContainer);

				const triangle = document.createElement("span");
				triangle.classList.add("rating-arrow");

				const count = document.createElement("div");
				count.classList.add("upvotes");
				count.setAttribute("id", extension.id);
				count.innerText = extension.upvotes.length;

				const upvoteButton = document.createElement("div");
				upvoteButton.appendChild(triangle);
				upvoteButton.appendChild(count);
				upvoteButton.classList.add("rating-container");
				upvoteButton.setAttribute("extensionId", extension.id);
				if (authenticated) {
					upvoteButton.classList.add("rating-active");
					if (extension.upvotes.some(upvoter => upvoter.id === userId)) {
						upvoteButton.classList.add("downvote");
						upvoteButton.addEventListener("click", downvote);
					} else {
						upvoteButton.classList.add("upvote");
						upvoteButton.addEventListener("click", upvote);
					}
				} else {
					upvoteButton.classList.add("rating-inactive", "upvote");
				}

				const extensionCard = document.createElement("div");
				extensionCard.classList.add("extension-card", "gradient");
				extensionCard.appendChild(linkRegion);
				extensionCard.appendChild(upvoteButton);

				containerElement.appendChild(extensionCard);
			})
		}
	})
}
