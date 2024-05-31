"use strict"
// arrays are good but not sufficient for real world data
// objects store key value pairs and does not have index

// Create Object::: (by default the keys are in strings format)
const person = {name:"Nothing", age:27 , hobbies:["Workout","Coding","listening music"] , "my fear":"Spiders"};
console.log(person);

//access data of object:::
console.log(person.name);   // dot notation
console.log(person["age"]); // bracket notation
console.log(person.hobbies);
console.log(" ");

// add key value pair:::
person.gender = "male";
person["IQ"] = 140; 
console.log(person);
console.log(" ");


// dot vs bracket notation:::

// (1) we can access the key like "my fear" by using bracket notation only bcoz it has spaces and js will give give an error with dot notation
console.log(person["my fear"]);
console.log(" ");

// (2) we can add another named key using bracket notation
const key = "email";
person[key] = "xyz@gmail.com" // named variable email is stored
console.log(person);
console.log(" ");


// Iterate through objects:::

// for in loop:::
for (let keys in person){
    // console.log(person[keys]);
    // console.log(`${keys} : ${person[keys]}`);
    console.log(keys,":",person[keys]);
}
console.log(" ");

// Object.keys::: (covert into array)
console.log(Object.keys(person));
for(let key of Object.keys(person)){
    console.log(key);
}
console.log(" ");


// Computed properties:::
const key1 = "objkey1";
const key2 = "objkey2";
const key3 = "objkey3";
const key4 = "objkey4";
const value1 = "myvalue1";
const value2 = "myvalue2";
const value3 = "myvalue3";
const value4 = "myvalue4";

// method 1:
const obj1 = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj1);

// method 2:
const obj2 = {};
obj2[key3] = value3;
obj2[key4] = value4;
console.log(obj2);
console.log(" ");



// spread operator:::
const newObj = {...obj1 , ...obj2 , key69:"value69"};
console.log(newObj);
console.log(" ");


// object destructuring
const Anime = {
    Name : "jujutsu kaisen",
    character : "Gojo",
    Grade : "Strongest",
    Status : "dead"
}

// const Name = Anime.Name;
// const character = Anime.character;
// console.log(Name , character);

const{Name , character , ...rest} = Anime;
console.log(Name);
console.log(rest);
console.log(" ");


// objects inside array
// very useful in real world applications
const users = [
    { userId:1 , fname : "A" , gender:"male" },
    { userId:2 , fname : "B" , gender:"female" },
    { userId:3 , fname : "C" , gender:"male" }
]
for(let user of users){
    console.log(user);
    // console.log(user.fname);
}
console.log(" ");

// nested destructuring
const [{userId , fname : user1fname}, , {gender: user3gender}] = users; // this space is left for destructuring the 2nd object
console.log(user1fname);
console.log(userId);
console.log(user3gender);

const obj = {
    key1: "one",
    key2: "two" 
}
// clone using Object.assign:::
const obj_ = Object.assign({},obj);
console.log(obj_);

// Maps:::
// map is an iterable
// store data in ordered fashion
// store key value pair(Like objects)
// duplicate keys are not allowed

// Maps V/S Objects:::
// objects can only have string or symbol as key while in maps you can use anything as key like array, number, string

const newPerson = new Map();

// set
newPerson.set('fname','A');
newPerson.set('age' , 23);
newPerson.set(1,'one');
console.log(newPerson);

// get
console.log(newPerson.get(1));

// keys
console.log(newPerson.keys());
for(let key of newPerson.keys()){
    console.log(key);
}
 
// for of loop --> cannot be used in objects
for(let key of newPerson){
    console.log(key);  // key value pair --> in array
}


// optional chaining:::
// if a property doesn't exist currently and we can return null instead of error we use (?.)
const user = {
    fname: "xyz",
    // address: {houseNo :"zyx"}
}
console.log(user?.fname);
console.log(user?.address?.houseNo); 