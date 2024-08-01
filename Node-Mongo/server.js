const express = require("express");
const app = express();
const db = require("./db"); //database
const bodyparser = require("body-parser");

//Bodyparser is a middleware libreary for Express.js
// It is used to parse and extract the body of incoming HTTP requests
app.use(bodyparser.json());



// Import the router files 
        const personRoutes = require('./routes/personroutes');
// Use the routers 
        app.use('/person',personRoutes); // deleted the person from router file and use here

        const menuRoutes= require('./routes/menuroutes');
        app.use('/menu',menuRoutes);

app.get("/", function (req, res) {
  res.send("welcome to the restaurant");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
