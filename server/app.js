require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const controllers = require('./controllers/controllerIndex');

sequelize.sync(); //pass in {force: true} to reset tables

app.use(express.json());


// Non-protected route
app.use('/user', controllers.User);

app.use(require('./middleware/validate-session'));




app.listen(3050, function() {
    console.log('App is listening on port 3050.')
});