const db = require('./db');
const Events = require('./models/Events');
const User = require('./models/User');

Events.belongsToMany(User, { through: 'following' });
User.belongsToMany(Events, { through: 'following' });

module.exports = { Events, db, User };

