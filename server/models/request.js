const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const requestModel=
    sequelize.define('request', 
    {
        requestName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        requestApproved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultVaue: false,
        },
        requestComment: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    // requestModel.sync(); //pass in {force: true} to reset tables
module.exports = requestModel;