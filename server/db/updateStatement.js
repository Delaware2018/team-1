const sequelize = require('./../config/database');

/* UPDATE table SET column = value */
/*
   Do a query to update the users in the database
     if error
       check for the code and let the user know in a cleaner way
 */
const updateStatement = (column, table, value, username) => {
    return new Promise((resolve, reject) => {

        sequelize.query(`UPDATE ${table} SET ${column} = ${value} where username = '${username}'`, { type: sequelize.QueryTypes.UPDATE })
            .then(result => {
                console.log("success");
                resolve(result);
            })
            .catch((error) => {
                console.log(error);
                switch (error.original.code) {
                    case 'ELOGIN':
                        let IPAddress = error.original.message.match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/);
                        reject(`Client with IP Address, ${IPAddress[0]}, needs to be given access.`);
                        break;
                    case 'EREQUEST':
                        reject(`${error.original.message}`);
                        break;
                    default:
                        reject('Something went wrong with inserting values into the database.');
                }
            });
    });
};

export default updateStatement;