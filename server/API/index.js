const router = require('express').Router();

router.use('/events', require('./events'));

router.use('/users', require('./users'));

router.use('/auth', require('./login'));


router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
