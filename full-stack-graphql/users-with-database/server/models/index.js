const Sequelize = require('sequelize');
const { sequelize } = require('./db');

const { DataTypes } = Sequelize;
const { STRING, INTEGER, BOOLEAN } = DataTypes;

const userTable = sequelize.define('users', {
  firstName: {
    type: STRING,
  },
  username: {
    type: STRING,
  },
  favNumber: {
    type: INTEGER,
  },
  isActive: {
    type: BOOLEAN,
  },
});

module.exports = {
  User: userTable,
};
