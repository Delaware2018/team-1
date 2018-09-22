const router = require('express').Router();

const { selectStatement, insertStatement } = require('./../db/index');

router.get('/journey/:user', (req, res) => {
    selectStatement(['U.memberSince', 'D.amount', 'D.dateOfDonation'], 'UsersTable AS U', `WHERE username = '${req.params.user}' INNER JOIN donations AS D on D.userID = U.userID`)
        .then(result => {
            res.status(200).send(result);
        }).catch(error => {
            console.log(error);
            res.sendStatus(404);
        });
});

router.post('/donation', (req, res) => {
    let donation = req.body;
    selectStatement(['username'], 'UsersTable', `WHERE username = '${req.body.name}'`)
        .then(user => {
            if(user.length === 1) {
                donation.type = 'creditCard';
                donation.dateOfDonation = '2018-09-21';

                insertStatement(req.body, 'UsersTable').then((result) => {
                    res.status(200).send(true);
                });
            } else {
                res.status(200).send(false);
            }
        }).catch(error => {
            console.log(error);
            res.sendStatus(404);
        });
});

module.exports = router;