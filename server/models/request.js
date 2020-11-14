const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const requestModel=
    sequelize.define('request', 
    {
        requestName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryApproved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultVaue: false,
        },
        requestComment: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

module.export = requestModel;