const express = require('express');
const path= require('path');
const app = express();

// access html folder and file
// console.log(__dirname);
const publicpath= path.join(__dirname,'public');
console.log(publicpath);


// app.use(express.static(publicpath));
// This is a built-in middleware function in Express. It serves static files and is based on serve-static.

// Render multiple html files without url
app.get('',(req,resp)=>{
    resp.sendFile(`${publicpath}/index.html`);
})
app.get('/aboutme',(req,resp)=>{
    resp.sendFile(`${publicpath}/about.html`);
})
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicpath}/help.html`);
})

app.get('*',(req,resp) => {
    resp.sendFile(`${publicpath}/404.html`);
})

app.listen(5000,() => {
    console.log('server running on port 5000');
});

