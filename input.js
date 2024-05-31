"use strict";
// prompt -> take user input in the form of strings 

let winningNumber = 19;
let userGuess = +prompt("ENTER NO. OF YOUR CHOICE ");
if(userGuess === 19){
    console.log("You Win!!!");
}
else if(userGuess < winningNumber){
    console.log("Guess is low");
}
else{
    console.log("Guess is high");
}

    

// Switch statement:::

let day = 3;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("Invalid Format")
        break;
}
   