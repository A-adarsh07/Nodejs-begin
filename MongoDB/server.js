const express = require("express");
const app = express();
const db = require("./db"); //database
const bodyparser = require("body-parser");

//Bodyparser is a middleware libreary for Express.js
// It is used to parse and extract the body of incoming HTTP requests
app.use(bodyparser.json());

const Person = require("./Models/personSchema"); //models -schema
const MenuItem = require("./Models/menu"); // create GET & POST  for this

app.post("/menuitem", async (req, res) => {
  try {
    const menudata = req.body;
    const newmenu = new MenuItem(menudata); //take the name from above where assigned the value
    const response = await newmenu.save();
    console.log("Menu items added successfully ");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error - Menu " });
  }
});

app.get("/menuitem", async (req, res) => {
  try {
    const reqitem = await MenuItem.find();

    console.log("Menu item  fetched successfully ");
    res.status(200).json(reqitem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server errror" });
  }
});


// Import the router files 
        const personRoutes = require('./routes/personroutes');
// Use the routers 
        app.use('/person',personRoutes); // deleted the person from router file and use here


app.get("/", function (req, res) {
  res.send("welcome to the restaurant");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
