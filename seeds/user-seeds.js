const sequelize = require('../config/connection');
const {
    User,
    Post
} = require('../models');

const userdata = [{
        username: 'david',
        password: 'password123',
        firstName: 'david',
        lastName: 'barn'
    },
    {
        username: 'nick',
        password: 'password123',
        firstName: 'nick',
        lastName: 'las'
    },
    {
        username: 'stephen',
        password: 'password123',
        firstName: 'stephen',
        lastName: 'job'
    },
    {
        username: 'rosanne',
        password: 'password123',
        firstName: 'rosanne',
        lastName: 'han'
    },
    {
        username: 'marvin',
        password: 'password123',
        firstName: 'marvin',
        lastName: 'bruce'
    },
    {
        username: 'william',
        password: 'password123',
        firstName: 'william',
        lastName: 'geroge'
    },
    {
        username: 'henry',
        password: 'password123',
        firstName: 'henry',
        lastName: 'brown'
    },
    {
        username: 'cindy',
        password: 'password123',
        firstName: 'cidy',
        lastName: 'ron'
    },
    {
        username: 'blake',
        password: 'password123',
        firstName: 'blake',
        lastName: 'water'
    },
    {
        username: 'roger',
        password: 'password123',
        firstName: 'roger',
        lastName: 'ken'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true
});

module.exports = seedUsers;