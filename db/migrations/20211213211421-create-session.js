'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Session', {
      sid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(36)
      },
      expires: {
        type: Sequelize.DATE
      },
      data: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Session');
  }
};
