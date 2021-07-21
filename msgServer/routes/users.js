const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Users = require("../models/Users");
const testUser = require("../testUser.json");

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('/name', function (req, res, next) {
    Users.findOne({
        where: {
            id: req.query.id
        }
    }).then((Users) => {
        if (Users) {
            res.json(Users.firstname);
        } else {
            res.json(false);
        }
    })
})

router.get('/login', function (req, res, next) {
    Users.findOne({
        where: {
            username: req.query.username,
            password: req.query.password,
        }
    }).then((Users) => {
        if (Users) {
            res.json(Users.id)
        } else {
            res.json(false)
        }
    })
})



router.post('/insert', function (req, res, next) {
    console.log("The body is :", req.body)
    Users.create(req.body.user)
});
module.exports = router;