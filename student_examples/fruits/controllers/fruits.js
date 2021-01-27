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
console.log('POST - req.body', req.body);
fruits.push(req.body)
console.log('fruits-', fruits)
res.json({
    route: 'post route',
    fruits: fruits
})
})

// DELETE ROUTE
router.delete('/:index', (req,res) => {
    fruits.splice(req.params.index, 1)
    res.json({
        route: 'delete route',
        id: req.params.index
    })
})

//UPDATE ROUTE
router.put('/:index', (req,res) => {
    console.log('put-req.body', req.body)
    console.log('put-req.params.index', req.params.index)
    fruits[req.params.index] = req.body
    res.json({
        route: 'put route'
    })
})




//export router to mport into server.js
module.exports = router