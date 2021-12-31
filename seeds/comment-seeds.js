const {
    Comment
} = require('../models');

const commentdata = [{
        comment_text: 'Oh My...',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'This is terrible!',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'Prayers and hearts for those who are in this situation.',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'What is going on?!',
        user_id: 3,
        post_id: 18
    },
    {
        comment_text: 'Seriousely?!',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'Speechless..',
        user_id: 1,
        post_id: 20
    },
    {
        comment_text: 'Ugh. Aweful!',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'Yikes!',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: 'I am so annoyed by this..',
        user_id: 6,
        post_id: 12
    },
    {
        comment_text: 'Where is this happened?',
        user_id: 6,
        post_id: 20
    },
    {
        comment_text: 'wow, I am so lucky that I just came back from there!',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'Oh no, my family is very close to that area. Hope they will be okay.',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'I need to checkup on my grandpa!',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'Shocking news!',
        user_id: 5,
        post_id: 14
    },
    {
        comment_text: 'How are they gonna survive?',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'I have lost contact with them couple days. What shall I do at this point?',
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: 'Peace with them',
        user_id: 2,
        post_id: 20
    },
    {
        comment_text: 'Hope everything is alright!',
        user_id: 4,
        post_id: 11
    },
    {
        comment_text: 'Is this the end of the world?!',
        user_id: 5,
        post_id: 13
    },
    {
        comment_text: 'Definitely not.',
        user_id: 9,
        post_id: 16
    },
    {
        comment_text: 'Wish they will get help soon!',
        user_id: 6,
        post_id: 4
    },
    {
        comment_text: 'Thanks for the post!',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Sorry for what happened..',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'So sad..',
        user_id: 8,
        post_id: 10
    },
    {
        comment_text: 'How is it possible?!',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Unbelievable!',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Really?!',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Oh dear..',
        user_id: 4,
        post_id: 16
    },
    {
        comment_text: 'Have some mercy please.',
        user_id: 4,
        post_id: 18
    },
    {
        comment_text: 'Aweful!',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Ssuch a sad news!',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'Peace with those who are in danger.',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Hope they will find a way out!',
        user_id: 3,
        post_id: 19
    },
    {
        comment_text: 'Wish this will end soon!',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Seriousely again?!',
        user_id: 10,
        post_id: 14
    },
    {
        comment_text: 'I feel really bad..',
        user_id: 10,
        post_id: 8
    },
    {
        comment_text: 'Hoping they will get needed help soonest possible!',
        user_id: 10,
        post_id: 11
    },
    {
        comment_text: 'What a terrible situation!',
        user_id: 8,
        post_id: 5
    },
    {
        comment_text: 'Is there anything that will be worse than this?',
        user_id: 8,
        post_id: 19
    },
    {
        comment_text: 'It happened without a warning!',
        user_id: 9,
        post_id: 19
    },
    {
        comment_text: 'I feel lucky that I am far away from that location!',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Never thought it could happen around here!',
        user_id: 2,
        post_id: 11
    },
    {
        comment_text: 'Are they getting the help they need?',
        user_id: 4,
        post_id: 6
    },
    {
        comment_text: 'Shall we do something for them?',
        user_id: 9,
        post_id: 6
    },
    {
        comment_text: 'What can we do for them?',
        user_id: 7,
        post_id: 9
    },
    {
        comment_text: 'Prayers I guess.',
        user_id: 4,
        post_id: 19
    },
    {
        comment_text: 'How about donate some clothes and food?',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Will that help?',
        user_id: 2,
        post_id: 19
    },
    {
        comment_text: 'Maybe not much, but at least it is something.',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Sure.',
        user_id: 10,
        post_id: 12
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;