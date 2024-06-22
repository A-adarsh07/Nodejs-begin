const express = require('express');
const path= require('path');
const app = express();
const fs = require('fs');
// access html folder and file
// console.log(__dirname);
const publicpath= path.join(__dirname,'public');
console.log(publicpath);




app.use(express.static(publicpath));
// This is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.listen(5000,() => {
    console.log('server running on port 5000');
});