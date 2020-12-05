const db = require('./db');
const Events = require('./models/Events');
const User = require('./models/User');
const Session = require('./models/Session');



Events.belongsToMany(User, { through: 'following' });
User.belongsToMany(Events, { through: 'following' });


//Sessions
Session.belongsTo(User);
User.hasMany(Session);

module.exports = { Events, db, User, Session };
