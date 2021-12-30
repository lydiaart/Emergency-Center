const sequelize = require('../config/connection');
const {
    User,
    Post
} = require('../models');

const userdata = [{
        username: 'david',
        password: 'password123',
        phone: 9167529927
    },
    {
        username: 'nick',
        password: 'password123',
        phone: 5555555555
    },
    {
        username: 'stephen',
        password: 'password123',
        phone: 5555555555
    },
    {
        username: 'rosanne',
        password: 'password123',
        phone: 5555555555
    },
    {
        username: 'marvin',
        password: 'password123',
        phone: 5555555555
    },
    {
        username: 'william',
        password: 'password123',
        phone: 5555555555
    },
    {
        username: 'henry',
        password: 'password123',
        phone: 5555555555
    },
    {
        username: 'cindy',
        password: 'password123',
        phone: 5555555555
    },
    {
        username: 'blake',
        password: 'password123',
        phone: 5555555555
    },
    {
        username: 'roger',
        password: 'password123',
        phone: 5555555555
    }
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true
});

module.exports = seedUsers;