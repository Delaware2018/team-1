const sequelize = require('./../config/database');

const executeProcedure = (procedure) => {

    return new Promise((resolve, reject) => {
        sequelize.query(`Exec ${procedure}`)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                console.log(error);
            })
    });

};

export default executeProcedure;