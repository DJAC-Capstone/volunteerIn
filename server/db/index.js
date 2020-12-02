const db = require('./db');
const Events = require('./models/Events');
const User = require('./models/User');

const Session = require('./models/Session');
//relations
module.exports = { Events, User, Session, db };



