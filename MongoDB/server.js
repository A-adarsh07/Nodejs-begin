const express = require("express");
const app = express();
const db = require("./db"); //database
const bodyparser = require("body-parser");

//Bodyparser is a middleware libreary for Express.js
// It is used to parse and extract the body of incoming HTTP requests
app.use(bodyparser.json());

const Person = require("./Models/personSchema"); //models -schema
const MenuItem = require("./Models/menu"); // create GET & POST  for this

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

app.get('/person/:worktype', async(req,res)=>{
    try {
        const worktype = req.params.worktype; //Extract the work type from the URL parameter
        if(worktype =='chef' || worktype =='manager' || worktype =='waiter'){
            const response = await Person.find({work:worktype});
            console.log('resoponse fetched');
            res.status(200).json(response);
         } else {
            res.status(404).json({error: 'Invalid work type'});
         }

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
    }
})



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

app.get("/", function (req, res) {
  res.send("welcome to the restaurant");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
