const { RoleModel, UserModel } = require("../models/modelsIndex");
const sequelize = require("../db");
const { Router } = require("express");
const roleController = Router();

/******************
 * POST: Create role
 ******************/
roleController.post("/createRole", async (req, res) => {
  let {
    roleName,
    roleDescription
  } = req.body.role;
 
  try {
    await RoleModel.create({
      roleName: roleName,
      roleDescription: roleDescription
    }).then((data) => {
      res.status(200).json({
        data: data,
        message: "Role successfully created.",
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Role creation failed ${err}.`,
    });
  }
});

/************************
 * GET: all roles
 ************************/
roleController.get("/viewRoles", async (req, res) => {
  try {
    let allRole = await RoleModel.findAll({
      include: UserModel,
    }).then((data) => {
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "No roles found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve roles ${err}.`,
      });
    }
  }
});

/************************
 * GET: single role
 ************************/
roleController.get("/roleInfo/:id", async (req, res) => {
  try {
    let allRoles = await RoleModel.findOne({
      where: {id: req.params.id},
      include: UserModel,
    }
    ).then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Role not found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve role ${err}.`,
      });
    }
  }
});

module.exports = roleController;
