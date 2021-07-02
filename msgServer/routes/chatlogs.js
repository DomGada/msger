const express = require('express');
const router = express.Router();
const db = require('../config/database')
const Chatlogs = require('../models/Chatlogs')

router.get('/', (req, res) =>
    Chatlogs.findAll()
    .then(Chatlogs => {
        console.log(Chatlogs);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)))

module.exports = router;