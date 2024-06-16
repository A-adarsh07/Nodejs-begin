const http= require('http');

http.createServer((req,resp) => {
    resp.write("hello ,I'M Jose Mourihno");
    resp.end(); // to tell browser engine to stop
}).listen(4500);


const fs = require('fs');

// Synchronous Operation: writeFileSync performs the file write operation synchronously, meaning it blocks the execution of the program until the operation completes.

const fs = require('fs');

try {
  fs.writeFileSync('example.txt', 'Hello, world!');
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}

// Asynchronous Operation: 'writeFile' performs the file write operation asynchronously, meaning it does not block the execution of the program. Instead, it uses callbacks or Promises to handle the completion of the operation.

const fs = require('fs').promises;

fs.writeFile('example.txt', 'Hello, world!')
  .then(() => {
    console.log('File written successfully');
  })
  .catch((err) => {
    console.error('Error writing file:', err);
  });

// USAGE WITH ASYNC-AWAIT
  const fs = require('fs').promises;

async function writeFile() {
  try {
    await fs.writeFile('example.txt', 'Hello, world!');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

writeFile();


fs.unlink('hello.txt',function(err){
    if(err) console.log(err);
    else console.log('removed');
})