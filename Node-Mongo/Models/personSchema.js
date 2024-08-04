const mongoose = require('mongoose');

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

// create Person model 
const person = mongoose.model('person',personSchema);

module.exports=person;
