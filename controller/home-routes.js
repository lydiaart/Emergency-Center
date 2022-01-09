const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const axios = require('axios');
const withAuth = require('../utils/auth')

router.post('/comments', (req, res) => {
    res.json({post_id:req.body.post_id})
});

router.get('/', (req, res) => {
    // load the home page and query the server for a valid logged in session
    // if a valid logged in session is found than conditional rendering is used
    // to determine if the caller can post and comment and etc.
    console.log('======================');
    //console.log(req.session);
    res.render('homepage', {
        // pass the login var to the the handlebars page home page
        loggedIn: req.session.loggedIn
    });
});

// router.get('/', (req, res) => {
//     res.render('homepage')
// });

router.get('/login', (req, res) => {
    // if user requests login page from homepage, render the handlebars login page
    res.render('login')
});

router.get('/signup', (req, res) => {
    // if user requests the signup page from the root /signup
    // then render the signup page, pass the loggedin var for conditional rendering
    // to prevent the user from signing up again until they logout
    res.render('signup',{
        loggedIn: req.session.loggedIn
    })
});

//get all the comments, by pulling the post by id.
router.get('/comments/:id', (req, res) => {
    // This route is not really used but is available
    // from the home page if you call /comments/:post_id
    // the route sends back a single post with all its comments
    const post_id = req.params.id // get the post id from the url
    let url = `${process.env.URL}/api/posts/${post_id}` // build a dynamic  url to qury the DB by post id
    axios({ // query the DB for the single post and all its comments
        method:'get',
        url : url,
      }).then(response => {
        
        res.render( // render/send back a single page, using the handle bar comments
            'comments',
            { // set back the following data for the handle bar to dynamically load new data
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

// router.get('/comments', (req, res) => {
//     // todo: I don't think this is used or is useful, I will remove it later
//     res.render('comments')
// });

router.get('/view-posts', (req, res) => {
    // loads the view-post handlebars from the home page /view-posts
    // this route will pull all the posts from the DB and its associated comments, and the assoociated users
    Post.findAll({ // pull all posts from the DB
            include: [{ // also pull the associated comments related to a single post
                model: Comment,
                include: [{ // pull the user data associated to each comment
                    model: User,
                }]
            }, { // pull the user data associated to a single post
                model: User,
            }],
            order:[['id', 'desc']]
        })
        .then(postData => {
            const posts = postData.map(post => {
                return post.get({
                    plain: true
                })
            })
       console.log(posts);

            // send the data pulled back to the client
            // render the view-posts handlebar with the data listed below
            res.render('view-posts', {
                posts, //send back all the posts that gets dynamically pulled into the page using handle bars
                loggedIn: req.session.loggedIn // send back a user session for handlebars conditional rendering
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