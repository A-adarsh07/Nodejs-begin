const mongoose = require('mongoose');
const mongoURL= 'mongodb://localhost:27017'

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser :true,
    useUnifiedTopology:true

})
const db = mongoose.connection;  //Mongoose maintains a default connection object representing the MongoDB connection

// Define event listeners for databases connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('error',(err)=> {
    console.error('Mongodb connection error',err);
});
db.on('disconnected',() =>{
    console.log('Mongodb disconnected');
});

// export the db object - export the database connection . 
module.exports= db;
