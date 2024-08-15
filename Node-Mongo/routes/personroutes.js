const express = require('express');
const router = express.Router();
const Person = require("../Models/personSchema"); //models -schema
const { jwtmiddleware,generateToken } = require('./../jwt');


// /POST route to addd the person data

router.post("/signup", async (req, res) => {
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
    const payload = {
      id:response.id,
      username:response.username
    }
    const token = generateToken(payload);
    console.log("Token is ", token);

    res.status(200).json({response:response,token:token});

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server errror" });
  }
});

//Login Route 
router.post("/login",async(req,res) => {
  try {
        //Extract username and password from request body 
        const {username,password} =req.body;

        //find the user by username 
        const user = await Person.findOne({username:username});

        //If user does not exist or password does not match , return error
        if( !user || !(await user.comparePassword(password))){
           return res.status(401).json({error: 'Invalid username or password'});
        }

        //generate token 
        const payload = {
          id:user.id,
          username:user.username
        }
        const token= generateToken(payload);
        //return token as response 
        res.json({token})
  } catch (error) {
     console.log(error);
      res.status(500).json({error:"Internal server error "});
  }
})

router.get('/profile',jwtmiddleware,async(req,res) => {
  try {
    //Extract user id from decoded token 
    const userData = req.user;
    console.log(userData);
    const userId= userData.id;
    const user= await Person.findById(userId);
    res.status(200).json({user});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"});
  }
})


// GET Method to get the person data  from database
router.get("/",jwtmiddleware, async (req, res) => {
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
router.get('/:worktype', async(req,res)=>{
    try {
        const worktype = req.params.worktype; //Extract the work type from the URL parameter
        if(worktype =='chef' || worktype =='manager' || worktype =='waiter'){
            const response = await Person.find({work:worktype});
            console.log('response fetched');
            res.status(200).json(response);
         } else {
            res.status(404).json({error: 'Invalid work type'});
         }

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.put('/:Person_id',async(req,res) => {
  try {
    const personId = req.params.Person_id;
    const updatedpersondb= req.body;
    const response = await Person.findByIdAndUpdate(personId, updatedpersondb,{
      new:true, //return the updated document
      runValidators:true,
    });
    if(!updatedpersondb){
      return res.status(404).json({error: 'Person not found'});
    }
     console.log('data updated');
     res.status(200).json(response);
  } catch (error){ 
    console.log(error);
    res.status(500).json({error: 'Internal server error'});
  }
})


router.delete('/:id',async(req,res) => {
  try {
    const personId = req.params.id; // extract the person's ID from the URL parameter 
    const response = await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data delete');
    res.status(200).json({message:'Person Deleted successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internal server error'});
  }
})

module.exports = router;