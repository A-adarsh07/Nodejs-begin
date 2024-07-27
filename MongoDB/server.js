const express = require('express');
const app = express();
const db= require('./db');  //database
const bodyparser = require('body-parser'); 

//Bodyparser is a middleware libreary for Express.js
// It is used to parse and extract the body of incoming HTTP requests
app.use(bodyparser.json()); 
 

const Person= require('./Models/personSchema');  //models -schema

//POST route to addd the person data
app.post('/person',(req,res)=>{
    const data = req.body //   data is processing through body parser and store inside req.body 

    //Create a new Person Document using the Mongoose model 
    const newPerson = new Person();
    newPerson.name = data.name;
    newPerson.age= data.age;
    newPerson.work=data.work;
    newPerson.mobile= data.mobile;
    newPerson.email=data.email;
    newPerson.salary=data.salary;




})

app.get('/',function(req,res){
    res.send('welcome to the restaurant');
})
app.listen(3000, () =>{
    console.log('listening on port 3000');
})