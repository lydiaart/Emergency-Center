const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

// // get all posts for dashboard
// router.get('/', withAuth, (req, res) => {
 
//     res.render('dashboard', { loggedIn: true });
   
// });



router.post('/posts', withAuth, (req, res) => {
  // expects {title: 'Flooding in Arden Fair mall', contents: 'South side of mall', 
  //          latitude: -143, longitude: 45, user_id: 1 }
  console.log(`\n\n\n\n \t\t\t\t ******* in dashboard-routes.js:/posts`)
  Post.create({
          title: req.body.title,
          contents: req.body.contents,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          user_id: req.session.user_id
      })
      .then(dbPostData => {
        //console.log(JSON.stringify(dbPostData))
        res.json(dbPostData)
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/', withAuth, (req, res) => {

    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'contents',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;
