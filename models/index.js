const User = require('./Users');
const Post = require('./Posts');
const Comment = require('./Comments');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsToMany(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };
