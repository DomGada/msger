const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');
const db = require('../config/database');

const Users = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    friendCode: {
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING
    },
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    profilepic: {
        type: DataTypes.STRING
    },
    friends: {
        type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    password: {
        type: DataTypes.STRING
    },

}, {
    timestamps: false,
})

module.exports = Users;