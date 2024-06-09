let fs= require('fs');  //js library 
let os= require('os');   //js library

var _ = require('lodash'); // npm package 
// Lodash is designed to simplify and streamline the process of working with arrays, objects, and other data types in JavaScript. Its functionality ranges from simple utility functions like map, filter, and reduce, to more complex operations like deep cloning objects, merging arrays, and much more


var user = os.userInfo();
console.log(user);

console.log('server file is running');

fs.appendFile('msg.txt', 'Hi' + user.username + '!', () => {
    // if(err) throw err;
    console.log('file is created');
}); 

// Lodash example
var info = ['person',1,2,3,2,'person','name','2'];
var filter = _.uniq(info);
console.log(filter);
