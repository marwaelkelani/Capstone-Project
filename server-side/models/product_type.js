const Sequelize = require('sequelize');
const config = require('../config');

const ProductType = config.define('product_type', {
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
    type_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 

}, {timestamps: false});


module.exports = ProductType;