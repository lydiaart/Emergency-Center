const router = require('express').Router();
// const sequelize = require('../../config/connection');
const {
    Post,
    User,
    Comment
} = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
            attributes: [
                'id',
                'contents',
                'title',
                'latitude',
                'longitude',
                'created_at'
            ],
            include: [{
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
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'contents',
                'title',
                'latitude',
                'longitude',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id',
                        'comment_text',
                        'post_id',
                        'user_id',
                        'created_at'
                    ],
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
            if (!dbPostData) {
                res.status(404).json({
                    message: 'No post found with this id'
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    // expects {title: 'Flooding in Arden Fair mall', contents: 'South side of mall', 
    //          latitude: -143, longitude: 45, user_id: 1 }
    Post.create({
            title: req.body.title,
            contents: req.body.contents,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            user_id: req.session.user_id
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;