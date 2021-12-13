'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    expires: {
      type: DataTypes.DATE,
    },
    data: {
      type: DataTypes.TEXT
    }
  }, {});
  Session.associate = function(models) {
    // associations can be defined here
  };
  return Session;
};
