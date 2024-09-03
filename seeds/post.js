const { Post } = require('../models');

const postData = [
  {
    title: 'Falcons!',
    content:
      'The Atlanta Falcons are primed to win the NFC south with the new additions.',
    user_id: 1,
  },
  {
    title: 'The Georgia Bulldogs!',
    Content:
      'The Bulldogs are the best college football team at the moment with their 34-3 win over Clemson.',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
