const Sequelize = require('sequelize');

const sequelize = new Sequelize('doWeHave', 'postgres', 'Letmein1234!', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to the database');
    }, 
    function(err) {
        console.log(`Error`, `${err}`);
    }
);

module.exports = sequelize;