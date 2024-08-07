const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// define the person schema 
const personSchema= new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    age:{
        type:Number,
    
    },
    work:{
        type:String,
        enum :['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number
    },
    username:{
        required:true,
        type:String
    },
    password: {
        required:true,
        type:String
    }
});

personSchema.pre('save',async function(next){
    const person = this ; // 'this' represents that we are doing it for whole DB
    
    // Hash the password only if it has been modified (or is new) 
    if(!person.isModified('password')) return next() ;  // if person is just updating something except password , then this will call next() function 
   
    try {
        const salt = await bcrypt.genSalt(10); // hash password generation
        const hashedPW = await bcrypt.hash(person.password,salt); 
        // Override the plain password with the hashed one 
        person.password= hashedPW;
        next();

    } catch (error) {
        return next(error);
    }
})

// Compare the entered Password 
personSchema.methods.comparePassword= async function (candidatePassword){
    try {
        const isMatch= await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

// create Person model 
const person = mongoose.model('person',personSchema);

module.exports=person;
