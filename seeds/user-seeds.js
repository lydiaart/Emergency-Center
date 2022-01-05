const sequelize = require('../config/connection');
const {
    User,
    Post
} = require('../models');

const userdata = [{
        username: 'WhoKnows',
        password: 'password123',
        phone: '9192426666',
        first_name: 'David',
        last_name: 'Barn',
        avatar: 'https://semantic-ui.com/images/avatar/large/christian.jpg'
    },
    {
        username: 'God-Forbid',
        password: 'password123',
        phone: '6602445556',
        first_name: 'Nick',
        last_name: 'Las',
        avatar: 'https://semantic-ui.com/images/avatar/large/chris.jpg'
    },
    {
        username: 'Rightnow',
        password: 'password123',
        phone: '3307842440',
        first_name: 'Stephen',
        last_name: 'Job',
        avatar: 'https://semantic-ui.com//images/avatar/large/elliot.jpg'
    },
    {
        username: 'RecallMemories',
        password: 'password123',
        phone: '3139980007',
        first_name: 'Rosanne',
        last_name: 'Han',
        avatar: 'https://semantic-ui.com/images/avatar/large/helen.jpg'
    },
    {
        username: 'DamnGood',
        password: 'password123',
        phone: '1125661234',
        first_name: 'Marvin',
        last_name: 'Bruce',
        avatar: 'https://semantic-ui.com/images/avatar2/large/elyse.png'
    },
    {
        username: 'WhoIsWilliam',
        password: 'password123',
        phone: '9178562341',
        first_name: 'William',
        last_name: 'Geroge',
        avatar: 'https://semantic-ui.com/images/avatar/large/matt.jpg'
    },
    {
        username: 'seriouslyCrazy',
        password: 'password123',
        phone: '4147771221',
        first_name: 'Henry',
        last_name: 'Brown',
        avatar: 'https://semantic-ui.com/images/avatar2/large/patrick.png'
    },
    {
        username: 'KoreanDrama',
        password: 'password123',
        phone: '6331223895',
        first_name: 'Cindy',
        last_name: 'Ron',
        avatar: 'https://semantic-ui.com//images/avatar/large/jenny.jpg'
    },
    {
        username: 'zumbieBite',
        password: 'password123',
        phone: '2431908956',
        first_name: 'Blake',
        last_name: 'Water',
        avatar: 'https://semantic-ui.com//images/avatar/large/steve.jpg'
    },
    {
        first_name: 'David',
        last_name: 'Ken',
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