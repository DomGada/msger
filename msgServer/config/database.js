const {
    Sequelize
} = require('sequelize');

module.exports = new Sequelize('msger', 'dominicgada', 'xx', {
    host: 'localhost',
    dialect: 'postgres'
});