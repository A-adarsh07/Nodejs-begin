const express = require('express');
const router = express.Router();

// /POST route to addd the person data

router.post("/", async (req, res) => {
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
Router.get("/", async (req, res) => {
    try {
      const reqData = await Person.find();
      console.log("data fetched successfully ");
      res.status(200).json(reqData);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server errror" });
    }
  });

  // Parameterized method of work 
app.get('/:worktype', async(req,res)=>{
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

module.exports = router;
