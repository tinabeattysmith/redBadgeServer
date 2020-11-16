const { PantryItemModel } = require("../models/modelsIndex");
const sequelize = require("../db");
const { Router } = require("express");
// const validateSession = require("../middleware/validate-session");
const pantryItemController = Router();

/******************
 * POST: Create panty item
 ******************/
pantryItemController.post("/create", async (req, res) => {
  let {
    itemName,
    itemDescription,
    importance,
    itemPrice,
    isUsed,
    itemComment,
  } = req.body.pantryItem;
  console.log(
    itemName,
    itemDescription,
    importance,
    itemPrice,
    isUsed,
    itemComment
  );

  try {
    await PantryItemModel.create({
      itemName: itemName,
      itemDescription: itemDescription,
      importance: importance,
      itemPrice: itemPrice,
      isUsed: isUsed,
      itemComment: itemComment,
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
pantryItemController.get("/all", async (req, res) => {
  try {
    let allItems = await PantryItemModel.findAll().then((data) => {
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
  } = req.body.pantryItem;
 
  try {
    let updateItem = await PantryItemModel.findOne({
      where: { id: itemID },
    })
      if (updateItem) {
        updateItem.update({
        itemName: itemName,
        itemDescription: itemDescription,
        importance: importance,
        itemPrice: itemPrice,
        isUsed: isUsed,
        itemComment: itemComment,
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
