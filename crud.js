// Create,Read , Update and Delete
const fs = require('fs');
const path= require('path');
const dirPath= path.join(__dirname,'crud');
const filepath= `${dirPath}/apple.txt`;

fs.writeFileSync(filepath,'this is a simple text file');  //this will create the file name apple.txt.


// ******** Read File ***
// fs.readFile(filepath,'utf8',(err,data) => console.log(data) ); // add 'utf8' to remove buffer from the output

// Buffer is nothing but a temporary memory location , node js require some memory for fs



// ***** Update file ***'

// fs.appendFile(filepath,' and we are adding more text in apple.txt file',(err) => {
// if(!err) console.log('file is updated');
// })


// fs.rename(filepath,`${dirPath}/fruit.txt`, (err)=>{
// if(!err) console.log('file name is updated'); 
// } )

// ** Delete the file **

// fs.unlinkSync(`${dirPath}/apple.txt`);
