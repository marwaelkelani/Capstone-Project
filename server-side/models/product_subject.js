const Sequelize = require('sequelize');
const config = require('../config');

const ProductSubject = config.define('product_subject', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    subject_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 

}, {timestamps: false});


module.exports = ProductSubject;