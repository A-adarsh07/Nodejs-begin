const express = require('express');
const app = express();
const db= require('./db');
app.get('/',function(req,res){
    res.send('welcome to the restaurant');
})
app.listen(3000, () =>{
    console.log('listening on port 3000');
})