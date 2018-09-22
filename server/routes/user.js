const router = require('express').Router();

const { selectStatement, insertStatement } = require('./../db/index');

const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Hello World');
});

/* POST the user into the database for signing up */
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
router.post('/login', (req, res) => {
    if(!req.session.username) {
        selectStatement(['username', 'password', 'email', 'phoneNumber', 'profilePic'], 'usersTable',
            `WHERE username = '${req.body.username}'`)
            .then((users) => {
                if (users.length > 0) {
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
                    })
                } else {
                    res.status(200).send(false);
                }
            });
        return;
    }

    res.status(200).send("User is already logged in");
});

router.get('/logout', (req, res) =>  {
    if(req.session.username) {
        req.session.destroy();
        console.log("User logged out.");
    }
    res.sendStatus(200);
});


module.exports = router;