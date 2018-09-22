const router = require('express').Router();

const { selectStatement, insertStatement } = require('./../db/index');

router.get('/journey/:user', (req, res) => {
    //'U.memberSince',
    selectStatement(['D.amount', 'D.dateOfDonation'], 'UsersTable AS U',` INNER JOIN donations AS D on D.userID = U.userID WHERE U.username = '${req.params.user}' ORDER BY D.dateOfDonation`)
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

router.get('/referral/:user', (req, res) => {
    selectStatement(['userID', 'UDT.linkUsed'], 'UsersTable AS U', `INNER JOIN UserDataTable AS UDT on UDT.userID = U.userID WHERE username = '${req.params.user}'`)
        .then(user => {
            if (user.length === 1) {
                let data = {
                    linkedUsed: user[0].linkedUsed++
                };
                insertStatement(data, 'UserDataTable')
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