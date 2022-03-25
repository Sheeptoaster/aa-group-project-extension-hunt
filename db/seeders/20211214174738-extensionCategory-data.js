'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('ExtensionCategories', [
			{ "extensionId": 1, "categoryId": 1, "createdAt": "11/19/2021", "updatedAt": "12/10/2021" },
			{ "extensionId": 1, "categoryId": 2, "createdAt": "10/20/2021", "updatedAt": "12/13/2021" },
			{ "extensionId": 2, "categoryId": 3, "createdAt": "11/15/2021", "updatedAt": "12/13/2021" },
			{ "extensionId": 2, "categoryId": 4, "createdAt": "9/28/2021", "updatedAt": "12/11/2021" },
			{ "extensionId": 3, "categoryId": 5, "createdAt": "11/17/2021", "updatedAt": "12/11/2021" },
			{ "extensionId": 3, "categoryId": 6, "createdAt": "11/12/2021", "updatedAt": "12/12/2021" },
			{ "extensionId": 4, "categoryId": 7, "createdAt": "12/9/2021", "updatedAt": "12/11/2021" },
			{ "extensionId": 4, "categoryId": 8, "createdAt": "11/29/2021", "updatedAt": "12/13/2021" },
			{ "extensionId": 5, "categoryId": 9, "createdAt": "10/4/2021", "updatedAt": "12/12/2021" },
			{ "extensionId": 5, "categoryId": 10, "createdAt": "11/30/2021", "updatedAt": "12/12/2021" },
			{ "extensionId": 6, "categoryId": 11, "createdAt": "10/8/2021", "updatedAt": "12/10/2021" },
			{ "extensionId": 6, "categoryId": 12, "createdAt": "11/28/2021", "updatedAt": "12/12/2021" },
			{ "extensionId": 7, "categoryId": 13, "createdAt": "10/30/2021", "updatedAt": "12/11/2021" },
			{ "extensionId": 7, "categoryId": 14, "createdAt": "10/13/2021", "updatedAt": "12/13/2021" },
			{ "extensionId": 8, "categoryId": 1, "createdAt": "10/19/2021", "updatedAt": "12/11/2021" },
			{ "extensionId": 8, "categoryId": 2, "createdAt": "11/14/2021", "updatedAt": "12/11/2021" },
			{ "extensionId": 9, "categoryId": 3, "createdAt": "12/2/2021", "updatedAt": "12/10/2021" },
			{ "extensionId": 9, "categoryId": 4, "createdAt": "11/16/2021", "updatedAt": "12/13/2021" },
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('ExtensionCategories', null, {});
	}
};
