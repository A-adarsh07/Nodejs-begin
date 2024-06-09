const fs = require('fs')  //Non-global core modules , which we need to import.
fs.writeFileSync("hello.txt", "this is a filesystem method"); // this will create another file , with the comments.

// check directory and filename
console.log("->>",__dirname); //global core modules
console.log(__filename);

const fs2= require("fs").writeFileSync;
fs2("txt1","we can also write this");

 const data = require('./data');  //importing data from data.js file
const http = require('http');
http.createServer((req,resp) => {
    resp.writeHead(200,{'Content-Type':'application\json'} )
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(8000);
