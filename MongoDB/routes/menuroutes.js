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


//   Create a parameterized route for taste in menu db ??
router.get("/:tastetype", async(req,res) => {
    try {
      const tastetype =req.params.tastetype;
      if(tastetype =='sweet' || tastetype=='sour' || tastetype =='spicy'){
          const response = await MenuItem.find({taste:tastetype});
          console.log("Menuitem fetched");
          res.status(200).json(response);

      }else {
        res.status(404).json({error: 'Invalid taste type'});

      }
    } catch (error) {
      
    }
}) 

  
  module.exports  = router;
