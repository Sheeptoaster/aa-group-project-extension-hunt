'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		firstName: {
			allowNull: false,
			type: DataTypes.STRING(50),
		},
		lastName: {
			allowNull: false,
			type: DataTypes.STRING(50),
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING(50),
			unique: true
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING(100),
			unique: true
		},
		bio: {
			type: DataTypes.TEXT,
		},
		hashedPassword: {
			allowNull: false,
			type: DataTypes.STRING.BINARY,
		},
		avatarURL: {
			type: DataTypes.STRING
		}
	}, {});
	User.associate = function (models) {
		User.hasMany(models.Comment, { foreignKey: 'userId' })
		User.hasMany(models.Extension, { foreignKey: 'ownerId' })
		User.belongsToMany(models.Extension, {
			through: "ExtensionUpvote",
			otherKey: "extensionId",
			foreignKey: "userId"
		})
	};
	return User;
};
