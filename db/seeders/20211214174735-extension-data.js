'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Extensions', [
			{ "upvotes": 329, "name": "Veribet", "description": "Veribet is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic and to help you create optimized content faster with state of the art AI generation.", "ownerId": 42, "iconURL": "/images/extensionIcons/icon9.png", "slogan": "Innovate Leading-Edge E-Markets", "extensionImg": "https://dummyimage.com/1100x500.png/dddddd/000000", "createdAt": "9/21/2021", "updatedAt": "12/11/2021" },
			{ "upvotes": 294, "name": "Zaam-Dox", "description": "Featuring a proprietary AI engine that analyzes the competition, two-factor authentication, and strong encryption technology, Zaam-Dox is a service that never sleeps and is always working for you.", "ownerId": 43, "iconURL": "/images/extensionIcons/icon8.jpeg", "slogan": "Facilitate Front-End Solutions", "extensionImg": "https://dummyimage.com/1100x500.png/ff4444/ffffff", "createdAt": "11/2/2021", "updatedAt": "12/11/2021" },
			{ "upvotes": 239, "name": "Konklux", "description": "Konklux helps non-technical founders win the competitive online content game by leveraging the latest in AI and content marketing. Our flagship product will help you create data-driven content and get visibility for your startup faster, so you can achieve success faster.", "ownerId": 44, "iconURL": "/images/extensionIcons/icon7.png", "slogan": "Visualize User-Centric Convergence", "extensionImg": "https://dummyimage.com/1100x500.png/5fa2dd/ffffff", "createdAt": "12/7/2021", "updatedAt": "12/14/2021" },
			{ "upvotes": 52, "name": "Otcom", "description": "", "ownerId": 45, "iconURL": "/images/extensionIcons/icon6.png", "slogan": "exploit customized markets", "extensionImg": "https://dummyimage.com/1100x500.png/5fa2dd/ffffff", "createdAt": "11/11/2021", "updatedAt": "12/13/2021" },
			{ "upvotes": 203, "name": "Tresom", "description": "", "ownerId": 46, "iconURL": "/images/extensionIcons/icon5.png", "slogan": "expedite end-to-end infomediaries", "extensionImg": "https://dummyimage.com/1100x500.png/5fa2dd/ffffff", "createdAt": "10/27/2021", "updatedAt": "12/14/2021" },
			{ "upvotes": 468, "name": "Cardify", "description": "", "ownerId": 47, "iconURL": "/images/extensionIcons/icon4.png", "slogan": "engineer out-of-the-box schemas", "extensionImg": "/images/extension-background/background4.jpg", "createdAt": "11/14/2021", "updatedAt": "12/14/2021" },
			{ "upvotes": 78, "name": "Duobam", "description": "", "ownerId": 48, "iconURL": "/images/extensionIcons/icon3.png", "slogan": "generate web-enabled systems", "extensionImg": "/images/extension-background/background3.jpg", "createdAt": "11/12/2021", "updatedAt": "12/14/2021" },
			{ "upvotes": 351, "name": "Bitchip", "description": "", "ownerId": 49, "iconURL": "/images/extensionIcons/icon2.jpeg", "slogan": "recontextualize extensible interfaces", "extensionImg": "/images/extension-background/background2.jpg", "createdAt": "11/24/2021", "updatedAt": "12/14/2021" },
			{ "upvotes": 336, "name": "Ronstring", "description": "", "ownerId": 49, "iconURL": "/images/extensionIcons/icon1.jpeg", "slogan": "Extend Granular Bandwidth", "extensionImg": "/images/extension-background/background1.jpg", "createdAt": "9/24/2021", "updatedAt": "12/14/2021" },
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Extensions', null, {});
	}
};
