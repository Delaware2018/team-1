const router = require('express').Router();

const { selectStatement } = require('./../db/index');

router.get('/story', (req, res) => {
    selectStatement(['U.signedUp', 'D.donationAmount', 'D.dateDonated'], 'UsersTable AS U', `WHERE username = '${req.body.username}' INNER JOIN DonationTable AS D on D.userID = U.userID`)
        .then(result => {
            res.status(200).send(result);
        }).catch(error => {
            console.log(error);
            res.sendStatus(404);
        });
});

module.exports = router;