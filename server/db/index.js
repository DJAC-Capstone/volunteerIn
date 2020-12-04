const db = require('./db');
const Events = require('./models/Events');
const User = require('./models/User');

// User.hasMany(User, { through: 'friends' });
User.belongsTo(User, { through: 'friends' });
Events.belongsToMany(User, { through: 'following' });
User.belongsToMany(Events, { through: 'following' });
// User.belongsToMany(User, { through: 'friends' });
// User.belongsToMany(User, { through: 'friends' });

// Events.hasMany(User);

module.exports = { Events, db, User };
