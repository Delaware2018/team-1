const sequelize = require('./../config/database');

/* EXEC procedure */
/*
   Do a query to execute a procedure
     if error
       check for the code and let the user know in a cleaner way
 */
const executeProcedure = (procedure) => {
    return new Promise((resolve, reject) => {
        sequelize.query(`Exec ${procedure}`)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                console.log(error);
                switch(error.original.code) {
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

export default executeProcedure;