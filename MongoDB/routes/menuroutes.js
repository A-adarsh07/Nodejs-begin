const express = require('express');
const router = express.Router();
const MenuItem = require("./../Models/menu"); // create GET & POST  for this

router.post("/", async (req, res) => {
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

  router.get("/", async (req, res) => {
    try {
      const reqitem = await MenuItem.find();
  
      console.log("Menu item  fetched successfully ");
      res.status(200).json(reqitem);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server errror" });
    }
  });
  
  module.exports  = router;
