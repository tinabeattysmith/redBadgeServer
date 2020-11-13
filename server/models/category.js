const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const categoryModel=
    sequelize.define('category', 
    {
        freezeTableName: true, // table name will not pluralize
        categoryName: {
            type: DataTypes.String,
            allowNull: false,
        },
        categoryDescription: {
            type: DataTypes.String,
            allowNull: false,
        },
    });

module.export = categoryModel;