const Sequelize = require('sequelize');
const config = require('../config');

const Product = config.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 

    description_short : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 

    description_long : {
        type: Sequelize.TEXT,
        allowNull: false,
    }, 

    cover : {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    preview1 : {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    preview2 : {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    preview3 : {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price : {
        type: Sequelize.FLOAT,
        allowNull: false,
    }

}, {timestamps: false});


module.exports = Product;