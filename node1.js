var prompt = require('prompt-sync')();


const age = prompt("what is your age?");
if (age < 18){
    console.log("you'll get 20% discount");
}
else if (age >=18 && age <65){
    console.log("Normal ticket price applies");
}
else if(age >=65){
    console.log("you'll get 30% senior discount");
}
