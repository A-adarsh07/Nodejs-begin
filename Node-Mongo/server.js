const express = require("express");
const app = express();
const db = require("./db"); //database
const bodyparser = require("body-parser");
require('dotenv').config();

// using Passport for Authorization
const passport = require('passport');
const localStrategy= require('passport-local').Strategy; //used for username and passport based authentication

const Person = require('./Models/personSchema'); // for getting the username and password details 

//Bodyparser is a middleware libreary for Express.js
// It is used to parse and extract the body of incoming HTTP requests
app.use(bodyparser.json());

const PORT = process.env.PORT || 3000;

// Middleware Function
const logRequest= (req,res,next)=> {
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next();  //Move on to next phase i.e it'll now move to server to get data 
}
app.use(logRequest);

// username & password verification function 
app.use(new localStrategy(async(username,password,done) => {
  try {
    console.log('Received credentials',username,password);
    const user = Person.findOne({username:username}); // here we are comparing the username provided in person schema 
    if(!username)
      return done(null,false,{message:'Incorrect username'}) ;  // done is a callback function and it only takes three parameters :done(error,user,info) if user found then error=null,user=true 

    

  } catch (error) {
    
  }
})
)


// Import the router files 
        const personRoutes = require('./routes/personroutes');
// Use the routers 
        app.use('/person',personRoutes); // deleted the person from router file and use here

    const menuRoutes= require('./routes/menuroutes');
    app.use('/menu',menuRoutes);

app.get("/", function (req, res) {
  res.send("welcome to the restaurant");
});

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
