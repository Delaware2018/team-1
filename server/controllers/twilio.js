require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

let twilio = (phone, body) => {
    client.messages
        .create({
            body: body,
            from: '+19082800331',
            to: phone
        })
        .then((message) => console.log(message.sid));
};

let twilioBatch = (phone, body) => {
    client.messages
        .create({
            to: phone,
            from: '+19082800331',
            body: `Your classes have been added: \n ${body}`
        })
        .then((message) => console.log(message.sid));
};

module.exports = twilio;