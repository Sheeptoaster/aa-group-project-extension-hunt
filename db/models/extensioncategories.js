'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExtensionCategories = sequelize.define('ExtensionCategories', {
    extensionId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  ExtensionCategories.associate = function(models) {
    // associations can be defined here
  };
  return ExtensionCategories;
};
