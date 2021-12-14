'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Categories', [
        { name: 'Productivity', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Debuggers', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Quality of Life', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Extension Packs', createdAt: new Date(), updatedAt: new Date() },
        { name: 'User Experience', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Formatters', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Programing Languages', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Language Packs', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Education', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Snippets', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Keymaps', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Themes', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Testing', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Other', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories', null, {});
  }
};
