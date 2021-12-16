'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extension = sequelize.define('Extension', {
    upvotes: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      type: DataTypes.TEXT
    },
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    iconURL: {
      type: DataTypes.TEXT
    },
    slogan: {
      type: DataTypes.TEXT
    },
    extensionImg: {
      type: DataTypes.TEXT
    },
  }, {});
  Extension.associate = function(models) {
    Extension.belongsTo(models.User, { foreignKey: 'ownerId' }),
    Extension.belongsToMany(models.Category, {
      through: 'ExtensionCategories',
      otherKey: 'categoryId',
      foreignKey: 'extensionId'
    })
    Extension.hasMany(models.Comment, { foreignKey: 'extensionId' })
  };
  return Extension;
};
