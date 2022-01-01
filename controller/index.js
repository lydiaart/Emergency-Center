const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const createPostRoutes = require('./create-post-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/create-post', createPostRoutes);

module.exports = router;