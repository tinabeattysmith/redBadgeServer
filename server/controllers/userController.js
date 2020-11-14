const UserModel = require("../models/user");
const sequelize = require("../db");
const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UniqueConstraintError } = require("sequelize/lib/errors");
const validateSession = require("../middleware/validate-session");
const userController = Router();

/**
 * Register user
 */

userController.post("/register", async (req, res) => {
    let { firstName, lastName, userName, password } = req.body.user;
    console.log(firstName, lastName, userName, password);
    
    try {
      await UserModel.create({ 
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        passwordHash: bcrypt.hashSync(password, 10),
      }).then((data) => {
        const token = jwt.sign({ id: data.id }, process.env.JWT_SECRET); 
        res.status(201).json({
          data: data,
          message: "Success: Account created!",
          token: token,
        });
      });
    } catch (err) {
      if (err instanceof UniqueConstraintError) {
        res.status(409).json({
          message: "Account with that email already taken.",
        });
      } else {
        res.status(500).json({
            err: `${err}`,
            message: "Registration failed",
        });
      }
    }
});


module.exports = userController;