const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const axios = require('axios');
const withAuth = require('../utils/auth')

router.post('/comments', (req, res) => {
    res.json({post_id:req.body.post_id})
});

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
    res.render('signup',{
        loggedIn: req.session.loggedIn
    })
});

//get all the comments, by pulling the post by id.
router.get('/comments/:id', withAuth, (req, res) => {
    const post_id = req.params.id
    let url = `http://localhost:3001/api/posts/${post_id}`
    axios({
        method:'get',
        url : url,
      }).then(response => {
        
        res.render(
            'comments',
            {
                post_id: post_id,
                comments: response.data.comments,
                loggedIn: req.session.loggedIn,
                posts: response.data
            }
        )
        
      })
      .catch(function (error) {
        console.log(error);
      });
    
});

router.get('/comments', withAuth, (req, res) => {
    res.render('comments')
});

router.get('/view-posts', (req, res) => {
    Post.findAll({
            include: [{
                model: Comment,
                include: [{
                    model: User,
                }]
            }, {
                model: User,
            }]
        })
        .then(postData => {
            const posts = postData.map(post => {
                return post.get({
                    plain: true
                })
            })

            res.render('view-posts', {
                posts,
                loggedIn: req.session.loggedIn
            })
        })
});

router.get('/create-post', withAuth, (req, res) => {
    res.render('create-post', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router;