require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

/* twilio code send a text to a number provided */
<<<<<<< HEAD
let twilio = (phone, body) => {
  client.messages
    .create({
      body: body,
      from: '+19082800331',
      to: phone
    })
    .then(message => console.log(message.sid));
=======
let text = (phone, body) => {
    client.messages
        .create({
            body: body,
            from: '+19082800331',
            to: phone
        })
        .then((message) => console.log(message.sid));
>>>>>>> 3af184aad6494d5fa4863cbc688df57a053787f9
};

module.exports = twilio;
