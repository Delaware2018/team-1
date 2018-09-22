const sequelize = require('./../config/database');

const insertStatement = (attributes, table) => {
    return new Promise((resolve, reject) => {
        let user = Object.values(attributes);

        let values;
        if (typeof user[0] === 'string')
            values = "'" + user[0] + "'" ;
        else
            values = user[0];

        for (let i = 1; i < user.length; i++) {
            if (typeof user[i] === 'string')
                values = values + ", '" + user[i] + "' ";
            else
                values = values + ', ' + user[i];
        }

        sequelize.query(`INSERT INTO ${table} VALUES(${values})`, { type: sequelize.QueryTypes.INSERT }).then(result => {
            resolve(result);
        }).catch((error) => {
            console.log(error);
            switch(error.original.code){
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

export default insertStatement;