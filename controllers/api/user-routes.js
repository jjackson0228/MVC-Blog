const router = require('express').Router();
const { User } = require('../../models');

//create new user
router.post('/', async (req, res) => {
  try {
    const UserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(UserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Define your routes...started get all
router.get('/', (req, res) => {
  res.send('Users route');
});
//Need Login

module.exports = router;
