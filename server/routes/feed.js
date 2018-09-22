const router = require('express').Router();

const { selectStatement, insertStatement } = require('./../db/index');

router.get('/', (req, res) => {
    console.log(req.params.user);
    selectStatement(['*'], 'feeds', '')
        .then(result => {
            console.log(result);
            res.status(200).send(result);
        }).catch(error => {
            console.log(error);
            res.sendStatus(404);
        });
});

module.exports = router;