const db = require('./db');
const Events = require('./models/Events');
const User = require('./models/User');

// User.hasMany(Events);
Events.belongsToMany(User, { through: 'following' });
User.belongsToMany(Events, { through: 'following' });

// Events.hasMany(User);

module.exports = { Events, db, User };
