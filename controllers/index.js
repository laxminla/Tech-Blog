const router = require('express').Router();
const globalRoutes = require('./globalRoutes');
// const apiRoutes = require('./api')
router.use('/', globalRoutes);
// router.use('/api', apiRoutes);
module.exports = router;