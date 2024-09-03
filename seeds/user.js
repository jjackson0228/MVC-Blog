const { User } = require('../models');

const userData = [
  {
    username: 'swagyP123',
    password: 'swagpassword',
  },
  {
    username: 'thegoat123',
    password: 'goatpassword',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
