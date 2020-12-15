const Sequelize = require('sequelize');
const db = require('../db');

const Posts = db.define('posts', {
    imagePreviewUrl:{
        type: Sequelize.STRING,
        defaultValue: '',
      },
    comment: {
    type: Sequelize.STRING,
    // allowNull: false
  }
});

module.exports = Posts;
  