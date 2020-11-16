require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const { User, PantryItem, Request } = require('./controllers/controllerIndex');

sequelize.sync(); //pass in {force: true} to reset tables

app.use(express.json());

// Non-protected route
app.use('/user', User);

// Protected route
app.use('/item', require('./middleware/validate-session'), PantryItem);
app.use('/request', require('./middleware/validate-session'), Request);


app.listen(3050, function() {
    console.log('App is listening on port 3050.')
});