const Sequelize = require('sequelize');

let database = 'Ecommerce';
let username = 'marwa';
let password = 'password';

const config = new Sequelize(database, username, password, {dialect: 'mariadb'});

module.exports = config;