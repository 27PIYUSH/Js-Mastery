"use strict";

// function declaration:::
function print(anystring){
    console.log(anystring);
}
print("abc");


// function expression::: unknown function is stored in a variable and the name of variable is treated as function name
const firstChar = function(anystring){
    return anystring[0];
}
console.log(firstChar("abc"));


// Arrow function::: ()=>{}
const singHappyBirthday = () => {
    console.log("happy birthday to you.....");
}
singHappyBirthday();

const isEven = number => number%2 === 0;
console.log(isEven(20));


// Hoisting::: 
// only works on function declaration not on function expression and arrow function
// it means we can call function before its creation
// same with var --> gives undefined while let and const gives --> error

hello();
function hello(){
    console.log("Hello world... ")
}


// function inside function:::
const app = () => {

    const add = (num1,num2) => num1+num2;
    const mul = (num1,num2) => num1*num2;
    console.log("inside app");
    console.log(add(4,3));
    console.log(mul(4,3));

}
app();


// lexical scope :::
const myVar = "Value1";

// myVar is not in present in the myapp function... so this function searches for myVar in its lexical environment
function myapp(){
    // const myVar = 3;
    console.log(myVar);
}
myapp();


// block scope vs function scope:::
// let and const are block scope
// var is function scope

{
    let name = "felix";
    var myname = "felix";
    console.log(name);  // cannot be accessed outside this block... and gives error
}
console.log(myname); 

// default parameter:::  used to give default value if the value of parameter is not passed 
function addTwo(a,b=2){
    return a+b;
}
console.log(addTwo(10));


// rest parameter:::
function myFun(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `,c);
}
myFun(1,2,3,4,5,6,7);


// parameter destructuring:::   mostly used with objects and in react
const person = {
    firstName : "xyz",
    lastName : "..."
}
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.lastName);
// }
function printDetails({firstName,lastName}){
    console.log(firstName);
    console.log(lastName);
}
printDetails(person);


// callback functions::: 
function x(){
    console.log("inside fun x");
}

function y(callback){
    console.log(" Yo!! ");
    callback();
}
y(x);


// function returning function:::
function fun(){
    return ()=>{
        return "help!!!";
    }
}
const ans = fun();
console.log(ans());

// Higher order function --> if we accept a function within a function or we return a funtion in a function


// methods:::
// function inside object

const trial = {
    fname: "W",
    age: 7,
    about: function(){
        console.log(`person name is ${this.fname} and age is ${this.age}`);
    }
}
trial.about();

// this
const personInfo = function(){
    console.log(`person name is ${this.fname} and age is ${this.age}`);
}

const trial1 = { 
    fname: "X",
    age: 8,
    about: personInfo
}

const trial2 = { 
    fname: "Y",
    age: 18,
    about: personInfo
}

const trial3 = { 
    fname: "Z",
    age: 80,
    about: personInfo
}

trial1.about();
trial2.about();
trial3.about();

// console.log(this) // gives window object

// call:::

const user1 = {
    fname: "user1",
    age: 45,
    about: function(hobby){
        console.log(this.fname , this.age , hobby);
    }
}
const user2 = {
    fname: "user2",
    age: 67
}

user1.about.call(user2); // call --> can also use this function for user2
user1.about.call(user2 , "sleep");

// apply::: --> pass array of elements works similar to call
user1.about.apply(user2,["eat"]);

// bind::: --> returns function and this function can be used anywhere
const func = user1.about.bind(user2,"sleep");
func();

// cannot use this in arrow function and we cannot change this --> it takes this from its surroundings which is window object