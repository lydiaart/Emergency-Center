const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    //console.log(req.session);
    res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
  });


router.get('/login', (req, res) => {
    console.log(`in home-routes.js:/login`)
  if (req.session.loggedIn) {
    console.log(`\n\n\n\n\ -------in home-routes.js:/login entered if`)
    // res.render('login', {
    //     loggedIn: req.session.loggedIn
    //   });
      res.render('homepage', {loggedIn: req.session.loggedIn})
    //res.redirect('/')

    
    return;
  }
  console.log(`\n\n\n\n\ ------- home-routes.js:/login passed if statement`)

  //res.render('login');
  res.render('login');
});

module.exports = router;
