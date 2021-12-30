const router = require('express').Router()
const homeRoute = require('./home-route');
router.use('/', homeRoute);
module.exports = router;