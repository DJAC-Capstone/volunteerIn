const router = require('express').Router();
const { Events , User} = require('../db');
// load event

router.get('/', async (req, res, next) => {
  try {
    const events = await Events.findAll();
    res.send(events);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const event = await Events.findByPk(req.params.id,  { include: [User] });
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
    const signupEvent = await Events.findByPk(req.params.id);
    console.log(req.body);

    await signupEvent.update(req.body);
    res.send();
  } catch (ex) {
    next(ex);
  }
});
// create event
router.post('/create', async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, description, date, city, state } = req.body
    const newEvent = await Events.create(
      {
        title,
        description,
        date,
        city,
        state,
      });
    res.status(201).send(newEvent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
