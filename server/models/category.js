const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const categoryModel=
    sequelize.define('category', 
    {
        // freezeTableName: true, // table name will not pluralize
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