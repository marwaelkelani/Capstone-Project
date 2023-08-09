const Sequelize = require('sequelize');
const config = require('../config');

const Grade = config.define('grade', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    grade_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
}, {timestamps: false});


module.exports = Grade;