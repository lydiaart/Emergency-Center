const router = require('express').Router();
const sequelize = require('../config/connection');

const { Post, User, Comment, Vote } = require('../models');
const axios = require('axios')
const withAuth = require('../utils/auth');
require('dotenv').config();
const googleApiKey = process.env.googleApiKey

//twillio api configs
const twillioAccountSid = process.env.twillioAccountSid;
const TwillioAuthToken = process.env.TwillioAuthToken;
const twillioFromNumber = process.env.twillioFromNumber;
const clientTwillio = require('twilio')(twillioAccountSid, TwillioAuthToken);


//https://maps.googleapis.com/maps/api/geocode/json?latlng=38.4097,-122.7388&key=apiKey



router.post('/posts', withAuth, (req, res) => {
  // expects {title: 'Flooding in Arden Fair mall', contents: 'South side of mall', 
  //          latitude: -143, longitude: 45, user_id: 1 }
  //console.log(`\n\n\n\n \t\t\t\t ******* in dashboard-routes.js:/posts`)
  const severity =  req.body.severity
  const title = req.body.title
  const contents = req.body.contents
  const latitude = req.body.latitude
  const longitude = req.body.longitude
  let formatted_address;
  let usersaToAlert;

  Post.create({
          title:  title,
          contents: contents,
          latitude: latitude,
          longitude: longitude ,
          user_id: req.session.user_id,
          severity : severity
      })
      .then(dbPostData => {
        //console.log(`\n\n\n\n \t\t\t\t\t ********* in dashboard-routes.js:posts severity is : ${JSON.stringify(severity)}`)
        res.json(dbPostData)
      })
      .then(() => {
        //console.log(`\n\n\n\n \t\t\t\t\t  in dashboard-routes.js:posts severity is : ${JSON.stringify(severity)}`)
        console.log("\n\n\n\n\n \t\t\t\t\t ****** dashboard-routes.js: before  testing twillio")
        if(severity === "high" ||severity === "life-threatening"  ){
          const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`

          console.log("\n\n\n\n\n \t\t\t\t\t ****** dashboard-routes.js: testing twillio")
          console.log(`url is ${url}`)

            // 1) pass lat & lon to  google api to get county
            axios({
              method:'get',
              url : url,
            })
            .then(function (responseMapAPI) {
              console.log(`\n\n\n\n\n\n \t\t\t\t\t\t ************ axios call made`)
              const MapAPiData = responseMapAPI.data 
              console.log(MapAPiData.results[7].formatted_address)
              formatted_address = MapAPiData.results[7].formatted_address
              //res.send(JSON.stringify(MapAPiData));
            }).then(() => {
               // 2) get list of users & phone numbers and the corelating county thet subscibe to
 
               if(formatted_address){
                let fakeJSONUsers = [
                  {formatted_address:"San Francisco County, CA, USA",
                   phone:"+17071234567"},
                   {formatted_address:"Sacremento County, CA, USA",
                   phone:"+14151234567"},
                   {formatted_address:"Marin County, CA, USA",
                   phone:"+13031234567"},
                ]
                let usersArr = fakeJSONUsers
                usersaToAlert = usersArr.filter(user => user.formatted_address === formatted_address);
                console.log(`usersaToAlert: ${JSON.stringify(usersaToAlert)}`)


               }
              

            }).then(()=>{
              // 3) call twillio
              if(usersaToAlert){
                usersaToAlert.forEach(user => {

                  clientTwillio.messages
                    .create({
                        body: `${title} (${severity})| ${contents} \n ${latitude} ${longitude}`,
                        from: twillioFromNumber,
                        to: user.phone,
                      })
                  
                })

              }
            })
            .catch(function (error) {
              console.log(error);
            });
          
          
        }
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/', withAuth, (req, res) => {

    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'contents',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;
