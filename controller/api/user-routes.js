const router = require('express').Router();
const {User,Post,Comment} = require('../../models');

// get all users
router.get('/', (req, res) => {
    // when the route /api/users/ is called  pull all users in the DB
    User.findAll({
            attributes: { // pull all users and thier attributes, except for the password hash
                exclude: ['password']
            }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// pull a specific user by its id, and the posts they made & any related comments 
// when calling the route /api/users:user_id 
router.get('/:id', (req, res) => {
    User.findOne({
            attributes: { // pull the single users attributes, except the password hash
                exclude: ['password']
            },
            where: {
                id: req.params.id
            },
            include: [{ // pull this users posts, and each posts post data
                    model: Post,
                    attributes: [
                        'id',
                        'title',
                        'contents',
                        'latitude',
                        'longitude',
                        'created_at',
                        'location'
                    ]
                },
                { // pull the comments associated with each post
                    model: Comment,
                    attributes: [
                        'id',
                        'comment_text',
                        'created_at'
                    ],
                    include: { // include the post title with the comments pulled
                        model: Post,
                        attributes: ['title']
                    }
                }
            ]
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id'
                });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create a new user
router.post('/', (req, res) => {
    // expects {username: 'david', password: 'password123', phone: 9165551234}
    //console.log(`in user-routes.js creating user`)
    User.create({
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            avatar: req.body.avatar
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.phone = dbUserData.phone;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    // expects {username: 'david', password: 'password123'}
    //console.log(`\n \n \n  \n ********** in user-routes.js:/login`)
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({
                message: 'No user with that user name!'
            });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect password!'
            });
            return;
        }
        // save the new users data in a valid sesssion
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.phone = dbUserData.phone;
            req.session.loggedIn = true;
            
            res.json({
                user: dbUserData,
                message: 'You are now logged in!'
            });
        });
    });
});

// log a user out by destroying the valid session
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;