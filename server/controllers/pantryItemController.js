const { PantryItemModel, CategoryModel, MealModel } = require("../models/modelsIndex");
const sequelize = require("../db");
const express = require("express");
const pantryItemController = express.Router();

/******************
 * POST: Create panty item
 ******************/
pantryItemController.post("/createItem", async (req, res) => {
  let {
    itemName,
    itemDescription,
    importance,
    itemPrice,
    isUsed,
    itemComment,
    mealId,
    categoryId
  } = req.body.pantryItem;
 
  try {
    await PantryItemModel.create({
      itemName,
      itemDescription,
      importance,
      itemPrice,
      isUsed,
      itemComment,
      mealId,
      categoryId,     
    }).then((data) => {
      res.status(200).json({
        data: data,
        message: "Item successfully created!",
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Item creation failed ${err}`,
    });
  }
});

/************************
 * GET: all pantry items
 ************************/
pantryItemController.get("/viewItems", async (req, res) => {
  try {
    await PantryItemModel.findAll({
      include: [CategoryModel, MealModel]
    }).then((data) => {
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "No items found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve lists ${err}`,
      });
    }
  }
});

/************************
 * GET: single pantry item
 ************************/
pantryItemController.get("/itemInfo/:id", async (req, res) => {
  try {
    const ItemInfo = await PantryItemModel.findOne({
      where: { id: req.params.id },
      include: [CategoryModel, MealModel]
    }
    ).then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Pantry Item not found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve pantry item ${err}.`,
      });
    }
  }
});

/************************
 * PUT: Update pantry item
 ************************/
pantryItemController.put("/update/:id", async (req, res) => {
  const itemID = req.params.id;
  let {
    itemName,
    itemDescription,
    importance,
    itemPrice,
    isUsed,
    itemComment,
    mealId,
    categoryId,
  } = req.body.pantryItem;
 
  try {
    let updateItem = await PantryItemModel.findOne({
      where: { id: itemID },
    })
      if (updateItem) {
        updateItem.update({
        itemName,
        itemDescription,
        importance,
        itemPrice,
        isUsed,
        itemComment,
        mealId,
        categoryId,
      });
      res.status(200).json({updateItem,
      message: 'Item successfully updated'})
      } 
      else {
        res.status(404).json({ message: "Item not found." });
      }
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve item ${err}`,
      });
    }
  }
});

/* ******************
 * DELETE: Delete item
 ********************/
pantryItemController.delete("/delete/:id", async (req, res) => {
  try {
    const deleteItem = await PantryItemModel.destroy({
      where: { id: req.params.id },
    }).then((data) => {
      res.status(200).json({ message: "Item succesfully deleted!" });
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to delete user. ${err}`,
    });
  }
});

module.exports = pantryItemController;
