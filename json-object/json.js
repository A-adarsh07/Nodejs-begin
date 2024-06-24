// file system module to perform file operations
const fs = require('fs');
 
// json data
var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
 
// parse json
var jsonObj = JSON.parse(jsonData);  //convert JSON string to object
console.log(jsonObj);
console.log(jsonObj.persons[0]);

// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);// convert JS value to JSON string
console.log(jsonContent);
 
fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});