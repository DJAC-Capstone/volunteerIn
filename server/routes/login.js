const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User, Session, Events } = require('../db');

router.post('/', async (req, res, next) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({where: { email }}, { include: [Events] })
    if (user) {
        const correctPassword = await bcrypt.compare(password, user.password)
        if (correctPassword) {
            const usersSession = await Session.findByPk(req.sid)
            await usersSession.setUser(user)
            res.send(user)
        }
        else {
            res.sendStatus(401);
        }
    }
    else {
        res.sendStatus(401);
    }
}
catch (err) {
    next(err)
}
})

module.exports = router;
