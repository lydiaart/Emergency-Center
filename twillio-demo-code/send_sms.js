require('dotenv').config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const twillioAccountSid = process.env.twillioAccountSid;
const TwillioAuthToken = process.env.TwillioAuthToken;
const client = require('twilio')(twillioAccountSid, TwillioAuthToken);
const twillioFromNumber = process.env.twillioFromNumber;
const anyNumberToText = process.env.anyNumberToText;
const messageToText = process.env.messageToText;

client.messages
  .create({
     body: messageToText,
     from: twillioFromNumber,
     to: anyNumberToText,
   })
  .then(message => console.log(message.sid));