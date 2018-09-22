const router = require('express').Router();
// const twilio = require('./../controllers/twilio');

const { selectStatement, insertStatement } = require('./../db/index');

/* GET the journey for an individual user */
/* query all the donations the user donated
     forEach result change the format of the date
     send the donations to the clinet
 */
router.get('/journey/:user', (req, res) => {
  //'U.memberSince',
  selectStatement(
    ['D.amount', 'D.dateOfDonation'],
    'UsersTable AS U',
    ` INNER JOIN donations AS D on D.userID = U.userID WHERE U.username = '${
      req.params.user
    }' ORDER BY D.dateOfDonation DESC`
  )
    .then(result => {
      result.forEach(val => {
        val.dateOfDonation = val.dateOfDonation.slice(
          0,
          val.dateOfDonation.indexOf('T')
        );
      });
      console.log(result);
      res.status(200).send(result);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(404);
    });
});

/* POST the donation amount */
/* query the userID from the user that donated
     if user exists
       create a donation object formatted to fit the database
       insert donation object into database
         tell client it's great
     else
       tell the client the user doesn't exist
 */
router.post('/donation', (req, res) => {
  selectStatement(
    ['userID'],
    'UsersTable',
    `WHERE username = '${req.body.name}'`
  )
    .then(user => {
      if (user.length === 1) {
        let donation = {
          userID: user[0].userID,
          type: 'creditCard',
          dateOfDonation: `${new Date().toISOString()}`,
          amount: req.body.amount
        };

        insertStatement(donation, 'donations').then(result => {
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

/* DOES NOT WORK ATM, NEEDS MORE WORK INCLUDING TABLE CREATION */
router.get('/referral/:user', (req, res) => {
  selectStatement(
    ['userID', 'UDT.linkUsed'],
    'UsersTable AS U',
    `INNER JOIN UserDataTable AS UDT on UDT.userID = U.userID WHERE username = '${
      req.params.user
    }'`
  )
    .then(user => {
      if (user.length === 1) {
        //if the user exists
        let data = {
          linkedUsed: user[0].linkedUsed++ //increase the number of times their linked was used
        };
        insertStatement(data, 'UserDataTable') //insert that data back into the table
          .then(result => {
            res.status(200).send(true); //tell the client that the data was inserted
          });
      } else {
        res.status(200).send(false); //else tell the client
      }
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(404);
    });
});

/* GET the users to notify them a new event opened up */
/* query the phone number and chapter names from the user's in that chapter
     forEach user text them a new event opened up for that event
 */
router.get('/shareLink/:chapter', (req, res) => {
  selectStatement(
    ['U.phoneNumber', 'C.chapterName'],
    'UsersTable AS U',
    `INNER JOIN chapters AS C ON C.chapterCode = U.chapterMemberCode WHERE U.chapterMemberCode = '${
      req.params.chapter
    }'`
  )
    .then(user => {
      user.forEach(val => {
        twilio.text(val.phoneNumber, `New event in ${val.chapterName}`);
      });
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(404);
    });
});

module.exports = router;
