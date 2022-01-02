const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const axios = require('axios')

router.post('/comments', (req, res) => {
    //console.log(`in home-routes.js post_id ${req.body.post_id}`)
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
    res.render('signup')
});

//get all the comments, by pulling the post by id.
router.get('/comments/:id', (req, res) => {
    const post_id = req.params.id
    let url = `http://localhost:3001/api/posts/${post_id}`
    axios({
        method:'get',
        url : url,
      }).then(response => {
        
        //console.log(`\n\n\n\n\n\ \t\t\t\t\ postData.comments ${JSON.stringify(response.data)}`)
        res.render(
            'comments',
            {post_id:post_id,
            comments: response.data.comments,
            loggedIn: req.session.loggedIn,
            posts: response.data


        })
        
      })
      .catch(function (error) {
        console.log(error);
      });
    
});


router.get('/comments', (req, res) => {
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

    //console.log(posts);

            res.render('view-posts', {
                posts,
                loggedIn: req.session.loggedIn
            })
        })

});

router.get('/create-post', (req, res) => {
    res.render('create-post', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/contact', (req, res) => {
    res.render('contact')
})


module.exports = router;