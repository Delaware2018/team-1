require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

/* twilio code send a text to a number provided */
let text = (phone, body) => {
    client.messages
        .create({
            body: body,
            from: '+19082800331',
            to: phone
        })
        .then((message) => console.log(message.sid));
};

module.exports = twilio;