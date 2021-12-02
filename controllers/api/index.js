const router = require('express').Router();

const userRoutes = require('./user-Routes.js');
const commentRoutes = require('./comment-Routes.js');
const blogpostRoutes = require('./blogpost-Routes.js');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogposts', blogpostRoutes);

module.exports = router;