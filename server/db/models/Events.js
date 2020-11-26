const Sequelize = require('sequelize')
const db = require('../db')


const Events = db.define('events', {
    title: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        // allowNull: false
    },
    Time: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    duration: {
        type: Sequelize.DATE,
        // allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    coverImageUrl: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    comments: {
        type: Sequelize.STRING
    },
    donation: {
        type: Sequelize.STRING
    }
})

module.exports = Events
