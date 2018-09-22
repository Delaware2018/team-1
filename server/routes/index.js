const router = require('express').Router();

const { selectStatement, insertStatement } = require('./../db/index');

router.get('/journey/:user', (req, res) => {
    console.log(req.params.user);
    //'U.memberSince',
    selectStatement(['D.amount', 'D.dateOfDonation'], 'UsersTable AS U',` INNER JOIN donations AS D on D.userID = U.userID WHERE U.username = '${req.params.user}'`)
        .then(result => {
            result.forEach(val => {
                val.dateOfDonation = val.dateOfDonation.slice(0, val.dateOfDonation.indexOf('T'));
            });
            console.log(result);
            res.status(200).send(result);
        }).catch(error => {
            console.log(error);
            res.sendStatus(404);
        });
});

router.post('/donation', (req, res) => {
    selectStatement(['userID'], 'UsersTable', `WHERE username = '${req.body.name}'`)
        .then(user => {
            if (user.length === 1) {

                let donation = {
                    userID: user[0].userID,
                    type: 'creditCard',
                    dateOfDonation: `${new Date().toISOString()}`,
                    amount: req.body.amount
                };

                insertStatement(donation, 'donations')
                    .then((result) => {
                        res.status(200).send(true);
                    });
            } else {
                res.status(200).send(false);
            }
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(404);
        });
});

module.exports = router;