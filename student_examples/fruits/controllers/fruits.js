//import express
const express = require('express')
//import express router
const router = express.Router()
//move fruits object to fruits.js NOTE: it must start with ./ if it's just a file, not an NPM package
const fruits = require('../models/fruits')


//create fruits get route, route already has /fruits
router.get('/', (req, res) => {
    res.json({
        fruits: fruits
    });
});

//create a SHOW route/ route already has /fruits from server.js apps.use
router.get('/:i', (req, res) => {
    res.json({
        fruit: fruits[req.params.i]
    });
});

//CREATE ROUTE
router.post('/', (req, res) => {
res.json({
    route: 'post route'
})
})






//export router to mport into server.js
module.exports = router