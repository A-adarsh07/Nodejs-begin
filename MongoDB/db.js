const mongoose = require('mongoose');
const mongoURL= 'mongodb://localhost:27017'

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser :true,
    useUnifiedTopology:true

})