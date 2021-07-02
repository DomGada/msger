const express = require('express');
const router = express.Router();
const db = require('../config/database')
const Users = require('../models/Users')

router.get('/', (req, res) =>
    Users.findAll()
    .then(Users => {
        console.log(Users);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)))

module.exports = router;