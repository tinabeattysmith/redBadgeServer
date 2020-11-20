const { MealModel, PantryItemModel} = require("../models/modelsIndex");
const sequelize = require("../db");
const { Router } = require("express");
const mealController = Router();

/******************
 * POST: Create meal
 ******************/
mealController.post("/createMeal", async (req, res) => {
  let {
    mealName,
    mealDescription,
    mealComment,
    itemId
  } = req.body.meal;
  // console.log(mealName, mealDescription, mealComment, itemId);
 
  try {
    await MealModel.create({
      mealName,
      mealDescription,
      mealComment,
      itemId
  },
  )
    .then((data) => {
      res.status(200).json({
        data: data,
        message: "Meal successfully created!",
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Meal creation failed ${err}`,
    });
  }
});

/************************
 * GET: all meals
 ************************/
mealController.get("/viewMeals", async (req, res) => {
  try {
  await MealModel.findAll({include: PantryItemModel}).then((data) => {
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "No meals found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve meals ${err}`,
      });
    }
  }
});

/************************
 * GET: single meal
 ************************/
mealController.get("/mealInfo/:id", async (req, res) => {
    try {
      const MealInfo = await MealModel.findOne({
        where: { id: req.params.id },
        include: PantryItemModel
      }
      ).then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json({ message: "Meal not found." });
        }
      });
    } catch (err) {
      {
        res.status(500).json({
          message: `Failed to retrieve meal ${err}.`,
        });
      }
    }
  });

/************************
 * PUT: Update meal
 ************************/
mealController.put("/updateMeal/:id", async (req, res) => {
  let {
    mealName,
    mealDescription,
    mealComment,
    itemId
  } = req.body.meal;
   try {
    let updateMeal = await MealModel.findOne({
      where: { id: req.params.id },
    })
      if (updateMeal) {
        updateMeal.update({
        mealName: mealName,
        mealDescription: mealDescription,
        mealComment: mealComment,
        itemId
      });
      res.status(200).json({updateMeal,
      message: 'Meal successfully updated.'})
      } 
      else {
        res.status(404).json({ message: "Meal not found." });
      }
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve meal ${err}.`,
      });
    }
  }
});

/* ******************
 * DELETE: Delete item
 ********************/
mealController.delete("/deleteMeal/:id", async (req, res) => {
  try {
    const deleteMeal = await MealModel.destroy({
      where: { id: req.params.id },
    }).then((data) => {
      res.status(200).json({ message: "Meal succesfully deleted." });
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to delete meal. ${err}`,
    });
  }
});

module.exports = mealController;
