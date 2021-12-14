'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExtensionCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      extensionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Extensions' }
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Categories' }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ExtensionCategories');
  }
};
