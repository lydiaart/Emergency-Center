const sequelize = require('../config/connection');
const {
    User,
    Post
} = require('../models');

const userdata = [{
        username: 'WhoKnows',
        password: 'password123',
        phoneNumber: '9192426666',
        firstName: 'David',
        lastName: 'Barn',
        avatar: 'https://semantic-ui.com/images/avatar/large/christian.jpg'
    },
    {
        username: 'God-Forbid',
        password: 'password123',
        phoneNumber: '6602445556',
        firstName: 'Nick',
        lastName: 'Las',
        avatar: 'https://semantic-ui.com/images/avatar/large/chris.jpg'
    },
    {
        username: 'Rightnow',
        password: 'password123',
        phoneNumber: '3307842440',
        firstName: 'Stephen',
        lastName: 'Job',
        avatar: 'https://semantic-ui.com//images/avatar/large/elliot.jpg'
    },
    {
        username: 'RecallMemories',
        password: 'password123',
        phoneNumber: '3139980007',
        firstName: 'Rosanne',
        lastName: 'Han',
        avatar: 'https://semantic-ui.com/images/avatar/large/helen.jpg'
    },
    {
        username: 'DamnGood',
        password: 'password123',
        phoneNumber: '1125661234',
        firstName: 'Marvin',
        lastName: 'Bruce',
        avatar: 'https://semantic-ui.com/images/avatar2/large/elyse.png'
    },
    {
        username: 'WhoIsWilliam',
        password: 'password123',
        phoneNumber: '9178562341',
        firstName: 'William',
        lastName: 'Geroge',
        avatar: 'https://semantic-ui.com/images/avatar/large/matt.jpg'
    },
    {
        username: 'seriouslyCrazy',
        password: 'password123',
        phoneNumber: '4147771221',
        firstName: 'Henry',
        lastName: 'Brown',
        avatar: 'https://semantic-ui.com/images/avatar2/large/patrick.png'
    },
    {
        username: 'KoreanDrama',
        password: 'password123',
        phoneNumber: '6331223895',
        firstName: 'Cindy',
        lastName: 'Ron',
        avatar: 'https://semantic-ui.com//images/avatar/large/jenny.jpg'
    },
    {
        username: 'zumbieBite',
        password: 'password123',
        phoneNumber: '2431908956',
        firstName: 'Blake',
        lastName: 'Water',
        avatar: 'https://semantic-ui.com//images/avatar/large/steve.jpg'
    },
    {
        firstName: 'David',
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