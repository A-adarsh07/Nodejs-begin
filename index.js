const fs = require('fs')  //Non-global core modules , which we need to import.
fs.writeFileSync("hello.txt", "this is a filesystem method");

// check directory and filename
console.log("->>",__dirname); //global core modules
console.log(__filename);

const fs2= require("fs").writeFileSync;
fs2("txt1","we can also write this");