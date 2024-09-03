const router = require('express').Router();
const { Post, User, Comment } = require('../models');

//router.get "/login"finish router.get login
router.get('/login', (req, res) => {
  res.render('pages/login', {
    title: 'Login Page',
  });
});

router.get('/', async (req, res) => {
  //GET HTML route
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
      title: 'Home Page',
      content: 'Welcome to the Foundation and Handlebars integration!',
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

//add router.get "/dashboard"

//router.get /post/:id"

module.exports = router;
