const sequelize = require('../config/connection');
const seedPosts = require('./post');
const seedUsers = require('./user');
const seedComments = require('./comment');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  try {
    await seedComments();
  } catch (e) {
    console.log(e);
  }

  process.exit(0);
};

seedAll();
