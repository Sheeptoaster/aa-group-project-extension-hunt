'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/*
		  Add altering commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.bulkInsert('People', [{
			name: 'John Doe',
			isBetaMember: false
		  }], {});
		*/
		await queryInterface.bulkInsert("Users", [
			{
				firstName: "Demonstration (Demo)",
				lastName: "User",
				username: "Demo User",
				email: "fake@email.com",
				bio: "Welcome to Extension Hunt!",
				hashedPassword: "$2a$12$6VkMGgV.DzIG76DvCLRF/.ir/cXRqTecRgmyi49/m6NxcU0sQcDqW",
				avatarURL: "/images/user_kids_avatar_user_profile_icon_149314.png",
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			}
		], {});

		await queryInterface.bulkInsert("Extensions", [
			{
				name: "Demo Extension",
				description: "Demonstrates use of Extension Hunt. This is a second sentence.\n\nWe even have a second paragraph.\nCheck our socials: Twitter, Facebook, YouTube",
				ownerId: 51,
				iconURL: "/images/attachment_40839383-e1492536155905.png",
				slogan: "The next big 🦄",
				extensionImg: "/images/extension-background/background5.jpg",
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			}
		], {})

		await queryInterface.bulkInsert("Comments", [
			{
				content: "It has colors 13/10",
				extensionId: 1,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "First!",
				extensionId: 2,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "They see me commeting...",
				extensionId: 3,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "this is a test comment",
				extensionId: 4,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "best extension in the world 2/10",
				extensionId: 5,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "I use this and am 10x more productive 18/10",
				extensionId: 6,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "This extension was a real life saver",
				extensionId: 7,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "My best friend told me about this extension, I'm glad they did.",
				extensionId: 8,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "I know a guy who knows a guy who uses this extension",
				extensionId: 9,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				content: "THE WORST EXTENSION EVER",
				extensionId: 10,
				userId: 51,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			}
		], {})

		return queryInterface.bulkInsert("ExtensionCategories", [
			{
				extensionId: 201,
				categoryId: 1,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				extensionId: 201,
				categoryId: 9,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				extensionId: 201,
				categoryId: 3,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			},
			{
				extensionId: 201,
				categoryId: 13,
				createdAt: "12/17/21",
				updatedAt: "12/17/21"
			}
		], {})
	},

	down: async (queryInterface, Sequelize) => {
		/*
		  Add reverting commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.bulkDelete('People', null, {});
		*/
		return;
	}
};
