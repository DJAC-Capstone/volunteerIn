const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/volunteerIn', { logging: false });

module.exports = db;
