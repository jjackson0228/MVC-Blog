const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
  },
});
