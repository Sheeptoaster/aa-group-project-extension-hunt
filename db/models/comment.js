'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    extensionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Extensions' }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    }
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
    Comment.belongsTo(models.Extension, { foreignKey: 'extensionId' })
  };
  return Comment;
};
