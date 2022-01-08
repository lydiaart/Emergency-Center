const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
require('dotenv').config();
const axios = require('axios') // used to make external api calls within node.js
const googleApiKey = process.env.googleApiKey // used to query api for location
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    res.render('create-post', { loggedIn: req.session.loggedIn });
});

//create a post
router.post('/', withAuth, (req, res) => {
    // expects {title: 'Flooding in Arden Fair mall', contents: 'South side of mall', 
    //          latitude: -143, longitude: 45, user_id: 1 }

    const title = req.body.title
    const contents = req.body.contents
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    let location = "location unkown";
    let data;

    // query  the google maps api for the city and state of the gps coordinates
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`

    //console.log(`url is ${url}`)
    
        axios({
            method:'get',
            url : url,
        })
        .then(function (responseMapAPI) {
            // save data from axios/ google maps fetch in a friendly variable
            const MapAPiData = responseMapAPI.data

            // if a valid GPS coord is pulled, set the location
            if (latitude && longitude)
                location = MapAPiData.results[4].formatted_address
        })
        .then(()=>{
            // create a new post in the  DB  using sequalize
            Post.create({
                title: title,
                contents: contents,
                latitude: latitude,
                longitude: longitude,
                user_id: req.session.user_id,
                location:  location
            })
                .then(dbPostData => {
                    // create the post then send the data back to the client
                    data = dbPostData
                    res.json(dbPostData)
                }) 
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
