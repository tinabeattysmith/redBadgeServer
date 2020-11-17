const { CategoryModel, PantryItemModel } = require("../models/modelsIndex");
const sequelize = require("../db");
const { Router } = require("express");
const categoryController = Router();

/******************
 * POST: Create category
 ******************/
categoryController.post("/createCategory", async (req, res) => {
  let {
    categoryName,
    categoryDescription,
  } = req.body.category;

  try {
    await CategoryModel.create({
      categoryName: categoryName,
      categoryDescription: categoryDescription,
    }).then((data) => {
      res.status(200).json({
        data: data,
        message: "Category successfully created.",
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Category creation failed ${err}.`,
    });
  }
});

/************************
 * GET: all categories
 ************************/
categoryController.get("/viewCategories", async (req, res) => {
  try {
    let viewRequests = await CategoryModel.findAll({
      include: PantryItemModel,
    }).then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "No requests found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve request ${err}.`,
      });
    }
  }
});

/************************
 * GET: single category
 ************************/
categoryController.get("/categoryInfo/:id", async (req, res) => {
  try {
    let categoryInfo = await CategoryModel.findOne({
      where: {id: req.params.id},
      include: PantryItemModel,
    }
    ).then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Category not found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve category ${err}.`,
      });
    }
  }
});

module.exports = categoryController;
