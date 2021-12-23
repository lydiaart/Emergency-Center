const sequelize = require('../config/connection');
const {
    User,
    Post
} = require('../models');

const userdata = [{
        username: 'david',
        password: 'password123'
    },
    {
        username: 'nick',
        password: 'password123'
    },
    {
        username: 'stephen',
        password: 'password123'
    },
    {
        username: 'rosanne',
        password: 'password123'
    },
    {
        username: 'marvin',
        password: 'password123'
    },
    {
        username: 'william',
        password: 'password123'
    },
    {
        username: 'henry',
        password: 'password123'
    },
    {
        username: 'cindy',
        password: 'password123'
    },
    {
        username: 'blake',
        password: 'password123'
    },
    {
        username: 'roger',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true
});

module.exports = seedUsers;