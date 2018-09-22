const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './../.env') });
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mssql',
    host: process.env.DB_SERVER,
    dialectOptions: {
        encrypt: true
    },
    operatorsAliases: false
});

module.exports = sequelize;