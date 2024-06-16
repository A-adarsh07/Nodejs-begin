const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// const data = fs.readFileSync('${__dirname}/data.js/data.json', 'utf-8');
// const dataobj = JSON.parse(data);
const data = require('./data');

const server = http.createServer((req,res) => {
const Pathname =req.url;

if (Pathname === '/' || Pathname === '/overview'){
    res.end('this is the overview page ');
} else if (Pathname ==='/product'){
    res.end('This is the product page ');
}   else if (Pathname === '/api'){
    res.writeHead(200,{'Content-type' : 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}

else {
    res.writeHead(404, {
        'Content-type' :'text/html'  // now a browser will expect some html type error page 
    });
    res.end('<h1>this page is not found</h1> ');  
}
});


server.listen(8000, () => {
    console.log('listening to requestss on port 8000');
});