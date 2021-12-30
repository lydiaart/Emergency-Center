const router = require('express').Router()


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
    res.render('view-posts')
});

router.get('/create-post', (req, res) => {
    res.render('create-post')
});


module.exports = router;