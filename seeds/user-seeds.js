const sequelize = require('../config/connection');
const {
    User,
    Post
} = require('../models');

const userdata = [{
        username: 'david',
        password: 'password123',
        phoneNumber: '919-242-6666',
        firstName: 'david',
        lastName: 'barn',
        avatar: 'https://semantic-ui.com/images/avatar/large/christian.jpg'
    },
    {
        username: 'nick',
        password: 'password123',
        phoneNumber: '660-244-5556',
        firstName: 'nick',
        lastName: 'las',
        avatar: 'https://semantic-ui.com/images/avatar/large/chris.jpg'
    },
    {
        username: 'stephen',
        password: 'password123',
        phoneNumber: '330-784-2440',
        firstName: 'stephen',
        lastName: 'job',
        avatar: 'https://semantic-ui.com//images/avatar/large/elliot.jpg'
    },
    {
        username: 'rosanne',
        password: 'password123',
        phoneNumber: '313-998-0007',
        firstName: 'rosanne',
        lastName: 'han',
        avatar: 'https://semantic-ui.com/images/avatar/large/helen.jpg'
    },
    {
        username: 'marvin',
        password: 'password123',
        phoneNumber: '112-566-1234',
        firstName: 'marvin',
        lastName: 'bruce',
        avatar: 'https://semantic-ui.com/images/avatar2/large/elyse.png'
    },
    {
        username: 'william',
        password: 'password123',
        phoneNumber: '917-856-2341',
        firstName: 'william',
        lastName: 'geroge',
        avatar: 'https://semantic-ui.com/images/avatar/large/matt.jpg'
    },
    {
        username: 'henry',
        password: 'password123',
        phoneNumber: '414-777-1221',
        firstName: 'henry',
        lastName: 'brown',
        avatar: 'https://semantic-ui.com/images/avatar2/large/patrick.png'
    },
    {
        username: 'cindy',
        password: 'password123',
        phoneNumber: '633-122-3895',
        firstName: 'cidy',
        lastName: 'ron',
        avatar: 'https://semantic-ui.com//images/avatar/large/jenny.jpg'
    },
    {
        username: 'blake',
        password: 'password123',
        phoneNumber: '243-190-8956',
        firstName: 'blake',
        lastName: 'water',
        avatar: 'https://semantic-ui.com//images/avatar/large/steve.jpg'
    },
    {
        username: 'roger',
        password: 'password123',
        phoneNumber: '212-785-3452',
        firstName: 'roger',
        lastName: 'ken',
        avatar: 'https://semantic-ui.com//images/avatar/large/joe.jpg'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true
});

module.exports = seedUsers;