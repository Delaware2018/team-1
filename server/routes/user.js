const router = require('express').Router();

const { selectStatement, insertStatement } = require('./../db/index');

const bcrypt = require('bcrypt');
const saltRounds = 10;

/* POST the user into the database for signing up */
/* if session doesn't exist
     see if the username exists
       if the username doesn't exist
         encrypt and salt the password and store the new user in the database
           create a session for the user
       else tell the client that the user does exist
     return
   tell the user that the user is already logged in
 */
router.post('/signup', (req, res) => {
    if(!req.session.username) {
        selectStatement(['username'], 'UsersTable', `WHERE username = '${req.body.username}'`)
            .then(user => {
                if(user.length === 0) {
                    bcrypt.hash(req.body.password, saltRounds).then((hash) => {
                       let user = req.body;

                       user.password = hash;
                       user.memberSince = new Date().toISOString();
                       user.subscriptionID = '';
                       user.subscriptionAmount = '';

                       insertStatement(req.body, 'UsersTable').then((result) => {
                           req.session.username = req.body.username;
                           res.status(200).send(true);
                       }).catch((error) => {
                           console.log(`Error in /signup route. ${error}`);
                           res.sendStatus(404);
                       });
                    });
                } else {
                    res.status(200).send(false);
                }
            }).catch(error => {
            console.log(error);
        });
        return;
    }

    res.status(200).send("User is already logged in");
});

/* POST to login the user */
/* if session doesn't exist
     get the username and password associated to the email
       if the email exists
         compare the encrypted password and the password the user provided
           if passwords match
             create a session for the user and tell the client it's good
           else tell the client that the username or password doesn't match
       else
         the username or password doesn't exist
     return

    tell the user that the user is already logged in
 */
router.post('/login', (req, res) => {
    if(!req.session.username) {
        selectStatement(['username', 'password'], 'UsersTable', `WHERE email = '${req.body.email}'`)
            .then((users) => {
                if (users.length === 0) {
                    bcrypt.compare(req.body.password, users[0].password)
                       .then(function (passwordsMatch) {
                           console.log(passwordsMatch);
                           if (passwordsMatch) {
                               req.session.username = req.body.username;
                               res.status(200).send(true);
                           } else {
                               res.status(200).send(false);
                           }
                       }).catch((error) => {
                           console.log(`Error in /login route. ${error}`);
                           res.sendStatus(404);
                       });
                } else {
                    res.status(200).send(false);
                }
            }).catch(error => {
                res.sendStatus(404);
                console.log(error);
            });
        return;
    }

    res.status(200).send("User is already logged in");
});

/* GET the logout */
/*
   If the session exists
     destroy the session
   send a 200 status back to client
 */
router.get('/logout', (req, res) =>  {
    if(req.session.username) {
        req.session.destroy();
        console.log("User logged out.");
    }
    res.sendStatus(200);
});


module.exports = router;