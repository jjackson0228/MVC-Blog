const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('pages/homepage', {
    title: 'Home Page',
    content: 'Welcome to the Foundation and Handlebars integration!',
  });
});

module.exports = router;
