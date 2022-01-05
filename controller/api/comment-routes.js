let post_link_twillio = process.env.post_link_twillio;
const twillioAccountSid = process.env.twillioAccountSid;
const TwillioAuthToken = process.env.TwillioAuthToken;
const twillioFromNumber = process.env.twillioFromNumber;
const clientTwillio = require('twilio')(twillioAccountSid, TwillioAuthToken);
require('dotenv').config()

const router = require('express').Router();
const axios = require('axios')
const {
    Comment
} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    const post_id = req.body.post_id
    const comment_text = req.body.comment_text

    // start text users
    let dbCommentDataReturn 
    Comment.create({
            comment_text: comment_text,
            user_id: req.session.user_id,
            post_id: post_id
        })
        .then(dbCommentData => {
            // text the users and lastly send data back to client 

             // send text messages
             const url = `${process.env.URL}/api/posts/${post_id}`
             let phones_to_text_hash = {}
             axios({
                 // axios call to pull post, to obtain list of users
                 method: 'get',
                 url: url,
             }).then(axios_post_data => {
                 // process the axios response to put list of phone numbers into hash
                 a_post = axios_post_data.data
                 const post_title = axios_post_data.data.title
                 const post_contents = axios_post_data.contents
                 const post_location = axios_post_data.location
                 // creates link to post for text messages 
                 const link_to_text = `${process.env.URL}/${post_id}`

                 const comments = a_post.comments
                 comments.map(a_comment => phones_to_text_hash[a_comment.user.phone] = a_comment.user.phone) 

                 if (phones_to_text_hash) // if valid list of phone numbers
                    for(key in phones_to_text_hash)
                        clientTwillio.messages.create({ // bundle up twillio message and implement text message call
                            body: `\n A comment was added to the post:${post_title} | ${post_location} \n  ${comment_text} \n  ${link_to_text}`,
                            from: twillioFromNumber,
                            to: phones_to_text_hash[key]
                        })                        
                        
             })
              .catch(err => {
                console.log(`axios error: ${err}`);
                return res.status(400).json(err);
            }); // end text users

            // end send data back to client
            return res.json(dbCommentData)     
        }) // end send user data back to client
        .catch(err => {
            console.log(err);
            return res.status(400).json(err);
        });


});

router.get('/view-posts"', withAuth ,(req, res)=> {
    res.render("view-posts")
})

module.exports = router;

// 