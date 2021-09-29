const User = require('./User');
const BlogPost = require('./BlogPost');

User.hasMany(Blogpost, {
    foreignkey: 'author',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: "author",
});



module.exports = { User, BlogPost }