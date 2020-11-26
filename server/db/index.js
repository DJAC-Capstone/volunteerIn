const db = require('./db')
const { User, Event } = require('./models') // @anton will be working User model and @dmitry will be working on Event model

// assosciations below:

module.exports = { User, Event }