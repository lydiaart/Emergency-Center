const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
require('dotenv').config();
const axios = require('axios')
const googleApiKey = process.env.googleApiKey
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {

    res.render('create-post', { loggedIn: req.session.loggedIn });

});


//twillio api configs
//const twillioAccountSid = process.env.twillioAccountSid;
//const TwillioAuthToken = process.env.TwillioAuthToken;
//const twillioFromNumber = process.env.twillioFromNumber;
//const clientTwillio = require('twilio')(twillioAccountSid, TwillioAuthToken);


//https://maps.googleapis.com/maps/api/geocode/json?latlng=38.4097,-122.7388&key=apiKey


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

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`
    console.log(`url is ${url}`)
    
        axios({
            method:'get',
            url : url,
        })
        .then(function (responseMapAPI) {
            
            const MapAPiData = responseMapAPI.data

            // if a valid GPS coord is pulled, set the location
            if(latitude && longitude)
                location = MapAPiData.results[4].formatted_address
            //console.log(`location  is ${JSON.stringify(location)}`)
            
        })
        .then(()=>{

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
                    //console.log(`data is ${JSON.stringify(data)}`)
                    res.json(dbPostData)
                })
           
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
