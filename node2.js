var prompt = require('prompt-sync')();

let length = prompt("enter length of rectangle :");
let breadth = prompt("enter breadth of rectangle :");
let area = (l,b) => {
    return Math.floor(l*b);
}
// let area = rectanglearea(length,breadth);
// function rectanglearea(l,b){
//     return Math.floor(l*b);
// }
console.log("The area of rectangle is : ", area(length,breadth));