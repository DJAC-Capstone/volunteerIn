const router = require('express').Router();
const { Event } = require('../db');
// load event

router.get('/:id', async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) {
      const error = new Error('EVENT NOT FOUND');
      error.status = 404;
      throw error;
    }
    res.status(200).send(event);
  } catch (err) {
    next(err);
  }
});

// sign up for the event
router.put('/:id', async (req, res, next) => {
  try {
    const signupEvent = await Event.findByPk(req.params.id);
    console.log(req.body);

    await signupEvent.update(req.body);
    res.send();
  } catch (ex) {
    next(ex);
  }
});
// create event
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const newEvent = await Event.create(req.body.user);
    res.status(201).send(newEvent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
