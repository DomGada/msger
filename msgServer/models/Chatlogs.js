const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');
const db = require('../config/database');

const Chatlogs = db.define('Chatlogs', {
    chatid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user1: {
        type: DataTypes.INTEGER
    },
    user2: {
        type: DataTypes.INTEGER
    },
    messages: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
}, {
    timestamps: false,
})

module.exports = Chatlogs;