const Sequelize = require('sequelize');
const config = require('../config');

const Type = config.define('type', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type_name : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
}, {timestamps: false});


module.exports = Type;