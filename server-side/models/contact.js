const Sequelize = require('sequelize');
const config = require('../config');

const Contact = config.define('contact', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 

    last_name : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 

    email : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 

    message : {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {timestamps: false});


module.exports = Contact;