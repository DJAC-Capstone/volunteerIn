const Sequelize = require('sequelize')
const db = require('../db')


const Event = db.define('event', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Time: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    duration: {
        type: Sequelize.DATE,
        allowNull: false
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
    sity: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    Comments: {
        type: Sequelize.STRING
    },
    Donation: {
        type: Sequelize.STRING
    }
})

module.exports = Event
