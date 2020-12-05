const { Session, User } = require('../db/index');

const authentication = async (req, res, next) => {
  const A_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

  //making this a function because it gets called twice
  const createGuestAndAssignCookie = async () => {

    const createdSession = await Session.create();
    res.cookie('sid', createdSession.id, {
      maxAge: new Date(Date.now() + A_WEEK_IN_SECONDS),
      path: '/'
    });
    req.sid = createdSession.id;
  }

  //session opened page for the first time.  Cookie created
  if (!req.cookies.sid) {
    await createGuestAndAssignCookie();
  }
  //session exists
  else {
    req.sid = req.cookies.sid
    const user = await User.findOne({
      include: [
        {
          model: Session,
          where: {
            id: req.sid
          }
        }
      ]
    })

    //if session already has a user
    if (user){
      req.user = user
  }
    //if session does not have a user
    //(this is weird case where computer has cookie not in our db)
    //we clear the cookie on their end, and then treat them as a guest
    else {
      res.clearCookie('sid', req.sid, {
        path: '/'
      })
      await createGuestAndAssignCookie();
    }
  }
  next();
}

module.exports = authentication
