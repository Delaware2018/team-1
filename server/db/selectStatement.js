const sequelize = require('./../config/database');

/* SELECT values FROM table */
/*
   create a string values which contains all the values with a comma
   Do a query to insert into database
     if error
       check for the code and let the user know in a cleaner way
 */
const selectStatement = (attributes, table, whereStatement) => {
    return new Promise((resolve, reject) => {
        try {
            let values = attributes[0];

            for (let i = 1; i < attributes.length; i++) {
                values = values + ', ' + attributes[i];
            }

            sequelize.query(`SELECT ${values} FROM ${table} ${whereStatement}`, {type: sequelize.QueryTypes.SELECT}).then(result => {
                resolve(result);
            }).catch((error) => {
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
                        reject('Something went wrong with selecting values from the database.');
                }
            });
        } catch (error) {
            reject(`Something went wrong trying to create the values string in the selectStatement. ${error}`);
        }
    });
};

export default selectStatement;
