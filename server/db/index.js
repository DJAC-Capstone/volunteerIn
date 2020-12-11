const db = require('./db');
const Events = require('./models/Events');
const User = require('./models/User');
const Session = require('./models/Session');

//relations
module.exports = { Events, User, db };

Events.belongsToMany(User, { through: 'following' });
User.belongsToMany(Events, { through: 'following' });

// User.hasMany(Events)

//Sessions
Session.belongsTo(User);
User.hasMany(Session);

module.exports = { Events, db, User, Session };
