"use strict"; // helps to prevent mistakes --> strict parsing and error handling at runtime

// Print:::
// console.log is used to print something on console
console.log("hello world");



// Variables::: ($ and _ can be used  ,  firstName (camel case)   &   first_name(snake case))

// declare variables
var fname = "Felix";

// using variable
console.log(fname);

// change value 
fname = "Softy Softy";

// Let Keyword ::: (can also declare variable)(use let keyword not var)
let myName = "NOO";
console.log(myName);

// declare constant
const pi = 3.14;  // this value cannot be changed 



// Strings::: 

// to find length
console.log(fname.length);

// indexing
console.log(fname[fname.length-1]);

// functions with strings
let firstName = "   A b C   ";

firstName = firstName.trim(); // used to remove spaces from sides
console.log(firstName);

console.log(firstName.toUpperCase()); // convet into uppercase

console.log(firstName.toLowerCase()); // convert into lowercase

console.log(fname.slice(0,5)); // used to slice a part of list


// used to give the type of datatype
let age = 19;
console.log(typeof age); 

// convert no. to string
age = String(age);  // age = age + "";
console.log(typeof age);

// convert string to no. 
let myStr = Number("27");  // myStr = +"27";
console.log(typeof myStr);

// String Concatenation:::
let newstr = firstName +" "+ myName;
console.log(newstr);

// template string:::
let aboutme = `I love ${fname} ... Am i lying?? ${myName}`;
console.log(aboutme);


// Datatypes::: (Strings , number , booleans , undefined , null , BigInt , Symbol)

let str1 ;  // undefined -> declared without any value (exception const)
console.log(str1);

let str2 = null; // null -> typeof null is object which is a bug/error by js
console.log(str2);

let num1 = BigInt(123); // BigInt -> store larger integer value which surpasses the MAX_SAFE_INTEGER value
let num2 = 123n;
console.log(num1 + num2);

let num3 = "7"; // booleans and comparison operators -> true or false
let num4 = 7;
console.log(num3<num4);

console.log(num3 == num4); // checks the value but not datatype

console.log(num3 === num4); // checks the datatype

console.log(num3 != num4); // does not check the datatype

console.log(num3 !== num4); // checks datatype


// truthy & falsy:::
// falsy -> false , 0 , "" , undefined , null
// other than falsy values all are truthy values

// if-else::: (and {&&} / or {||} operators can be used)
let lastName = "";
if (lastName){
    console.log("truthy value");
}
else{
    console.log("falsy value")
}

// ternary operator / conditional operator
let myAge = 19;
let drink = myAge >= 25 ? "alcohol" : "coffee";
console.log(drink);

// Loops:::

// while loop:::
let num = +prompt("enter no. :");

let i = 1;
while(i<=num){
    console.log(i);
    i++;
}

// for loop::: 
let sum = 0;
for(let i = 0; i<=num; i++){    // let only exist within the loop while var can be accessed outside the loop
    sum += i;
}
console.log(sum);

// break and continue can also be used in loops and do while also