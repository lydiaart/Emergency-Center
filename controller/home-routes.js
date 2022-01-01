const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    //console.log(req.session);
    res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
  });

  router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/comments', (req, res) => {
    res.render('comments')
});

router.get('/view-posts', (req, res) => {
   Post.findAll({
      include: [
          {
              model: Comment,
              include: [
                  {
                      model: User,
                  }
              ]
          },{
              model: User,
          }
      ]
   }) 
   .then(postData => {
     const posts = postData.map(post => {
         return post.get({
             plain: true
         })
     }) 

    console.log(posts);

    res.render('view-posts', {posts, loggedIn: req.session.loggedIn })
   })

});

router.get('/create-post', (req, res) => {
    res.render('create-post', {loggedIn: req.session.loggedIn })
});

router.get('/contact', (req, res) => {
    res.render('contact')
})


module.exports = router;
