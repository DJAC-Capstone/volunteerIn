const Sequelize = require('sequelize');
const { STRING, BOOLEAN, INTEGER ,DATE,TIME} = Sequelize;
const db = require('./db');
const bcrypt = require('bcrypt');

const Event = db.define('event', {
 
  title: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  date: {
    type: DATE,
    allowNull: false,
   // defaultValue: NOW
  },
  time: {                //IM NOT SURE ABOUT THIS ONE!!!
    type: TIME,
    allowNull: false,
   // defaultValue: NOW
  },

  duration: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
    },
  },
  street_address: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

   city: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  zip_code: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
    },
  },
  donations_received: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
    },
  },
  comments: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
    


});

module.exports = Event;
