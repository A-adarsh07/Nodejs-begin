const express = require("express");
const app = express();
const db = require("./db"); //database
const passport = require("./auth");

const bodyparser = require("body-parser");
require("dotenv").config();

//Bodyparser is a middleware libreary for Express.js
// It is used to parse and extract the body of incoming HTTP requests
app.use(bodyparser.json());

const PORT = process.env.PORT || 3000;

// Middleware Function
const logRequest = (req, res, next) => {
  console.log( `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}` );
  next(); //Move on to next phase i.e it'll now move to server to get data
};
app.use(logRequest);

app.use(passport.initialize()); 
//The code app.use(passport.initialize()); is used in an Express.js application to integrate Passport.js, a popular authentication middleware for Node.js.

const localAuthMiddleware = passport.authenticate("local", { session: false });

// Import the router files
const personRoutes = require("./routes/personroutes");
// Use the routers
//app.use("/person", localAuthMiddleware, personRoutes); // deleted the person from router file and use here , used Local authentication for person
app.use("/person",personRoutes);

const menuRoutes = require("./routes/menuroutes");
app.use("/menu", menuRoutes);

app.get("/", function (req, res) {
  res.send("welcome to the restaurant");
});

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
