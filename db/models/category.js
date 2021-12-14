'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    }
  }, {});
  Category.associate = function(models) {
    Category.belongsToMany(models.Extension, {
      through: 'ExtensionCategory',
      otherKey: 'extensionId',
      foreignKey: 'categoryId'
    })
  };
  return Category;
};
