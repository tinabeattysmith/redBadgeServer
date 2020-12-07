require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require("./db");
const {
  User,
  PantryItem,
  Request,
  Category,
  Meal,
  Role,
} = require("./controllers/controllerIndex");

sequelize.sync(); //pass in {force: true} to reset tables

app.use(express.json());

// Non-protected route
app.use("/user", User);

// Protected route
app.use("/item", require("./middleware/validate-session"), PantryItem);
app.use("/request", require("./middleware/validate-session"), Request);
app.use("/category", require("./middleware/validate-session"), Category);
app.use("/request", require("./middleware/validate-session"), Request);
app.use("/meal", require("./middleware/validate-session"), Meal);
app.use("/role", require("./middleware/validate-session"), Role);

app.listen(process.env.PORT, function () {
  console.log(`App is listening on port ${process.env.PORT}.`);
});
