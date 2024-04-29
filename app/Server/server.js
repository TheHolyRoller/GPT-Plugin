const express = require('express'); 

const app = express(); 


const multer = require('multer'); 



app.use(function(req, res, next){


    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Expose-Headers', 'Cool Custom Header, Noice');

    next(); 
    


})





















