const sequelize = require('./../config/database');

const updateStatement = (column, table, value, username) => {
    return new Promise((resolve, reject) => {

        sequelize.query(`UPDATE ${table} set ${column} = ${value} where username = '${username}'`, { type: sequelize.QueryTypes.UPDATE })
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