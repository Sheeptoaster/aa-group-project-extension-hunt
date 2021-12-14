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
      type: DataTypes.STRING
    }
  }, {});
  Extension.associate = function(models) {
    Extension.belongsTo(models.User, { foreignKey: 'ownerId' }),
    Extension.belongsToMany(models.Category, {
      through: 'ExtensionCategory',
      otherKey: 'categoryId',
      foreignKey: 'extensionId'
    })
  };
  return Extension;
};
