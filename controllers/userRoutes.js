const router = require('express').Router();

router.get('/login', (req, res) => {
  res.render('pages/login', {
    title: 'Login Page',
  });
});

router.get('/', async (req, res) => {
  res.render('pages/homepage', {
    title: 'Home Page',
    content: 'Welcome to the Foundation and Handlebars integration!',
  });
});

module.exports = router;
