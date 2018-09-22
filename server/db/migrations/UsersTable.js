const bcrypt = require('bcrypt');
const saltRounds = 10;
const { insertStatement } = require('./../index');

let data = [
    {
        "username": "eric",
        "password": "password",
        "fname": "Eric",
        "lname": "Hu",
        "email": "erich11364@gmail.com",
        "memberSince": "DATEADD(dd, -5, getDate())",
        "subscriptionID": "",
        "subscriptionAmount": ""
    },
    {
        "username": "iizauq",
        "password": "thisisme",
        "fname": "Quazi",
        "lname": "Hossain",
        "email": "q.hossain@ymail.com",
        "memberSince": "DATEADD(dd, -1, getDate())",
        "subscriptionID": "",
        "subscriptionAmount": ""
    },
    {
        "username": "Java",
        "password": "iamjava",
        "fname": "Syed",
        "lname": "Javaid",
        "email": "s.java458@gmail.com",
        "memberSince": "DATEADD(dd, -8, getDate())",
        "subscriptionID": "",
        "subscriptionAmount": ""
    },
    {
        "username": "Phraze",
        "password": "maria",
        "fname": "Dimitrios",
        "lname": "Kremezis",
        "email": "vdkremezis@gmail.com",
        "memberSince": "DATEADD(dd, -2, getDate())",
        "subscriptionID": "",
        "subscriptionAmount": ""
    },
    {
        "username": "Cody",
        "password": "northwellislit",
        "fname": "Cody",
        "lname": "Bisram",
        "email": "codyysb@gmail.com",
        "memberSince": "DATEADD(dd, -2, getDate())",
        "subscriptionID": "",
        "subscriptionAmount": ""
    }
];

data.forEach(val =>  {
    bcrypt.hash(val.password, saltRounds)
        .then(hash => {
            val.password = hash;
            insertStatement(val, 'UsersTable').then((result) => {
                console.log('Data was inserted');
            }).catch((error) => {
                console.log(`Error seeding users. ${error}`);
            });
        })
        .catch(error => {
            console.log(error);
        });
});