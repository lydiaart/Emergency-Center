const sequelize = require('../config/connection');
const {
    User,
    Post
} = require('../models');

const userdata = [{
        username: 'WhoKnows',
        password: 'password123',
        phoneNumber: '919-242-6666',
        firstName: 'David',
        lastName: 'Barn',
        avatar: 'https://semantic-ui.com/images/avatar/large/christian.jpg'
    },
    {
        username: 'God-Forbid',
        password: 'password123',
        phoneNumber: '660-244-5556',
        firstName: 'Nick',
        lastName: 'Las',
        avatar: 'https://semantic-ui.com/images/avatar/large/chris.jpg'
    },
    {
        username: 'Rightnow',
        password: 'password123',
        phoneNumber: '330-784-2440',
        firstName: 'Stephen',
        lastName: 'Job',
        avatar: 'https://semantic-ui.com//images/avatar/large/elliot.jpg'
    },
    {
        username: 'RecallMemories',
        password: 'password123',
        phoneNumber: '313-998-0007',
        firstName: 'Rosanne',
        lastName: 'Han',
        avatar: 'https://semantic-ui.com/images/avatar/large/helen.jpg'
    },
    {
        username: 'DamnGood',
        password: 'password123',
        phoneNumber: '112-566-1234',
        firstName: 'Marvin',
        lastName: 'Bruce',
        avatar: 'https://semantic-ui.com/images/avatar2/large/elyse.png'
    },
    {
        username: 'WhoIsWilliam',
        password: 'password123',
        phoneNumber: '917-856-2341',
        firstName: 'William',
        lastName: 'Geroge',
        avatar: 'https://semantic-ui.com/images/avatar/large/matt.jpg'
    },
    {
        username: 'seriouslyCrazy',
        password: 'password123',
        phoneNumber: '414-777-1221',
        firstName: 'Henry',
        lastName: 'Brown',
        avatar: 'https://semantic-ui.com/images/avatar2/large/patrick.png'
    },
    {
        username: 'KoreanDrama',
        password: 'password123',
        phoneNumber: '633-122-3895',
        firstName: 'Cindy',
        lastName: 'Ron',
        avatar: 'https://semantic-ui.com//images/avatar/large/jenny.jpg'
    },
    {
        username: 'zumbieBite',
        password: 'password123',
        phoneNumber: '243-190-8956',
        firstName: 'Blake',
        lastName: 'Water',
        avatar: 'https://semantic-ui.com//images/avatar/large/steve.jpg'
    },
    {
        username: 'GhostFans',
        password: 'password123',
        phoneNumber: '212-785-3452',
        firstName: 'Roger',
        lastName: 'Ken',
        avatar: 'https://semantic-ui.com//images/avatar/large/joe.jpg',
        username: 'david',
        password: 'password123',
        phone: 9167529927
    } 
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true
});

module.exports = seedUsers;