const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const categoryModel=
    sequelize.define('category', 
    {
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

module.exports = categoryModel;