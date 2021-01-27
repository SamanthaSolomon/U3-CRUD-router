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

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//import the routes
const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);


//END MIDDLEWARE

//configure server to listen on the port
app.listen(PORT, () => {
    console.log('listening on port 3000');
});