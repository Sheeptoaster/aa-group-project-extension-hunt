'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('ExtensionUpvotes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			extensionId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Extensions" }
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Users" }
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('ExtensionUpvotes');
	}
};
