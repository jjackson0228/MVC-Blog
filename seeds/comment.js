const { Comment } = require('../models');

const commentData = [
  {
    content: 'Gooooo Falcons',
    post_id: 1,
    user_id: 2,
  },
  {
    content: 'Go Daawwwggssss',
    post_id: 2,
    user_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
