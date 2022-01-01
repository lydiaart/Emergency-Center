const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
 
    res.render('create-post', { loggedIn: req.session.loggedIn });
   
});



module.exports = router;
