const Sequelize = require('sequelize');
const config = require('../config');

const Subject = config.define('subject', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    subject_name: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
}, {timestamps: false});


module.exports = Subject;