const router = require('express').Router()
const { User } = require('../db');

router.post('/', async (req, res, next) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({where: { email }})
    if (user) {
        if (password === user.password) {
            res.send(user)
        }
        else {
            res.sendStatus(401).send('username or password is incorrect');
        }
    }
    else {
        res.sendStatus(401).send('username or password is incorrect');
    }
}
catch (err) {
    next(err)
}
})

module.exports = router;
