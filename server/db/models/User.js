const Sequelize = require('sequelize');

const {
  STRING, DATE, ARRAY,
} = Sequelize;

const db = require('../db');

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

  imgURL: {
    type: STRING,
  },

  email: {
    type: STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  friends: {
    type: ARRAY(Sequelize.INTEGER),
    defaultValue:[1]
  },
  gender: {
    type: STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  date_of_birth: {
    type: DATE,
    // allowNull: false,
    // defaultValue: NOW
  },
  phone: {
    type: STRING,
    allowNull: false,
    defaultValue: 'none',
    validate: {
      notEmpty: true,
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
