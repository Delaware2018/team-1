const router = require('express').Router();

const { selectStatement } = require('./../db/index');

router.post('/journey', (req, res) => {
    selectStatement(['U.memberSince', 'D.amount', 'D.dateOfDonation'], 'UsersTable AS U', `WHERE username = '${req.body.username}' INNER JOIN donations AS D on D.userID = U.userID`)
        .then(result => {
            res.status(200).send(result);
        }).catch(error => {
            console.log(error);
            res.sendStatus(404);
        });
});

module.exports = router;