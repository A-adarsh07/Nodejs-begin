const express = require("express");
const app = express();
const db = require("./db"); //database
const bodyparser = require("body-parser");

//Bodyparser is a middleware libreary for Express.js
// It is used to parse and extract the body of incoming HTTP requests
app.use(bodyparser.json());

const Person = require("./Models/personSchema"); //models -schema

//POST route to addd the person data
app.post("/person", async (req, res) => {
  try {
    const data = req.body; //   data is processing through body parser and store inside req.body

    //Create a new Person Document using the Mongoose model
    const newPerson = new Person(data);
    // To prevent this lengthy approach , we'll put 'data' inside the 'new Person(data)' so that we get every data we need
    // newPerson.name = data.name;
    // newPerson.age= data.age;

    // save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server errror" });
  }
});

// GET Method to get the person data  from database
app.get("/person", async (req, res) => {
  try {
    const reqData = await Person.find();
    console.log("data fetched successfully ");
    res.status(200).json(reqData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server errror" });
  }
});
// Save the new person to the database
// newPerson.save((error,savedPerson) =>{
//     if(error) {
//         console.log('error saving person:', error);
//         res.status(500).json({error:'Internal server error'});
//     } else{
//         console.log('data saved successfully');
//         res.status(200).json({savedPerson});
//     }
//     })     This callback method is old and not good also not longer used , we'll use try,catchand block method

app.get("/", function (req, res) {
  res.send("welcome to the restaurant");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
