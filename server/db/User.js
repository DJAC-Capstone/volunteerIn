const Sequelize = require('sequelize');
const { STRING, BOOLEAN, INTEGER ,DATE} = Sequelize;
const db = require('./db');
const bcrypt = require('bcrypt');

const User = db.define('user', {
  first_name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },
  last_name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },

  gender: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date_of_birth: {
    type: DATE,
    allowNull: false,
   // defaultValue: NOW
  },

  phone: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
    },
  },

    password: {
    type: STRING,
    allowNull: false,
    defaultValue: 'none',
    validate: {
      notEmpty: true,
    },
    
  },


});

module.exports = User;
