//require dotenv
require('dotenv').config()
//require express
const express = require('express');
//instantiate the function
//option combine lines 4 & 7: const app = require('express')()
const app = express();
//set the port, access what is in the env file
const PORT = process.env.PORT || 3000;

//MIDDLEWARE - req comes in, sent to the middleware, middleware does something and sends to the response
const logger = require('morgan');
//.use() is a method used for middleware 
app.use(logger('dev'))

//move fruits object to fruits.js NOTE: it must start with ./ if it's just a file, not an NPM package
const fruits = require('./models/fruits')

//create fruits get route
app.get('/fruits', (req, res) => {
    res.json({
        fruits: fruits
    });
});

//create a SHOW route
app.get('/fruits/:i', (req, res) => {
    res.json({
        fruit: fruits[req.params.i]
    });
});

//configure server to listen on the port
app.listen(PORT, () => {
    console.log('listening on port 3000');
});