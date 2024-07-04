const express = require('express');
const app = express();
const db= require('./db');  //database

const bodyparser = require('body-parser');
app.use(bodyparser.json()); 
 

const person= require('./Models/person');  //models -schema



app.get('/',function(req,res){
    res.send('welcome to the restaurant');
})
app.listen(3000, () =>{
    console.log('listening on port 3000');
})