"use strict";

// Array::: (we can store any datatype in array)

let arr = [1,2.3,null,undefined,"string"];
let obj = {};
console.log(arr);
console.log(typeof arr);
console.log(typeof obj);

// to check whether it is array or an object we use::
console.log(Array.isArray(arr)); 
console.log(Array.isArray(obj)); 

// Array operations::: (Push & Pop is faster than Shift & Unshift)

// Push --> add to the last
arr.push("23");
console.log(arr);

// Pop --> remove from the last
arr.pop();
console.log(arr);

// Shift --> remove from the start
arr.shift();
console.log(arr);

// unshift --> add to the start
arr.unshift("007");
console.log(arr);

// clone Array::: (another array of same elements can be created and changes in one array does not reflect in other)
let oldArray = [1,2,3,4,5];

let newArray = oldArray.slice(0).concat("skip" , 23); // slice method
let newArray1 = [].concat(oldArray,"skipped",7); // concat method
let newArray2 = [...oldArray , ...newArray]; // spread operator

console.log(newArray);
console.log(newArray1);
console.log(newArray2);


//primitive vs reference datatype::: 

//  primitive --> string,number,boolean,undefined,null,symbol  --> stored in stacks
//  reference --> array,function,object (use const to save yourself from error) 
//  reference datatype m pointer point krega address ki trf jo heap m value stored hogi usski toh agr ek value change hui vo dusre pr bhi affect daalega --> pointer stack m hoga aur vo heap m stored address ki trf point krega

// loops in arrays:::

let myArr2 = [];
let myArr = ["one","two","three","four","five"];
for(let i = 0 ; i< myArr.length ; i++){
    myArr2.push(myArr[i].toUpperCase());
}
console.log(myArr2);


//const for creating array::: (safest method to create array) 
// heap memory ["apple","mango"] 0x11 refrence

const fruits = ["apple","mango"];
// fruits = ["banana"];   // we cannot assign new value to constant variable this will raise an error
fruits.push("banana"); // this will work bcoz fruit variable store add. where our main arr is stored
console.log(fruits);

// for of loop:::
for(let fruit of fruits){
    console.log(fruit);
}

// for in loop:::
for(let index in fruits){ 
    console.log(index); //give index
    console.log(fruits[index]); //give the elements at that index
}


// Array destructuring:::
const TryArray = ["lets","go","to","the","fuckin","gym"];
// let myvar1 = TryArray[0]; // least recommended
// let myvar2 = TryArray[1];
// console.log(myvar1);
// console.log(myvar2);

let [myvar1,myvar2, ...newTryArray] = TryArray; // mostly used
console.log(myvar1);
console.log(myvar2);
console.log(newTryArray);


// important array methods:::
// 1) forEach
// 2) map
// 3) filter
// 4) reduce
// 5) sort


// 1) forEach method::: (input --> callback function)
const numbers = [1,2,3,4,5];
function myfun(number , index){
    console.log(`index is ${index} & number is ${number}`);
}

// for(let i = 0 ; i<numbers.length ; i++){
//     myfun(numbers[i] , i);
// }
numbers.forEach(myfun); // for each apne aap loop wala kaam krdega --> baar baar fx call krega aur arguments paas krdega jitne bhi arguments h sb

numbers.forEach(function(number){    // we can also create anonymous fx(no name) directly with for each
    console.log(`${number} * 2 = ${number*2}`);
})


// 2) map method::: (input --> callback function)
// --> create new array
// --> always use return as it gives new array
const square = function(number){
    return number*number;
}

const squareNumber = numbers.map(square);
console.log(squareNumber);


// 3) filter method::: (input --> callback function)
// --> callback fx of filter always return boolean values (t/f)
// --> jo conditions true hongi unnko hi new array m store krega

const evenNumbers = numbers.filter((number) => number%2===0); // Filter out only the even values
console.log(evenNumbers);

 
// 4) reduce method:::

// ex - sum of all the nos. in array
const sum = numbers.reduce((accumulator , currentValue) => {
    return accumulator+currentValue;
},15) // initialize value of accumulator
console.log(sum);

// accumulator , currentvalue , return
//      1              2           3
//      3              3           6
//      6              4           10
//      10             5           15


// 5) Sort()::: (change the original arr)
const s_arr = [20,4,7,98,67];
s_arr.sort(); // sort as taking array elements as a string and use there ascii value 1200 --> it will take ascii value of 1 only
console.log(s_arr);

s_arr.sort((a,b)=>a-b); 
console.log(s_arr)
// a-b --> negative --> a,b  ex: 4,7 --> 4,7
// a-b --> positive --> b,a  ex: 20,4 --> 4,20

const products = [
    {productId: 1, productName: "p1" , price: 9000},
    {productId: 2, productName: "p2" , price: 800},
    {productId: 3, productName: "p3" , price: 30000},
    {productId: 4, productName: "p4" , price: 40},
    {productId: 5, productName: "p5" , price: 41000}
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b) =>{  // slice is used to clone the product array as sort will change the original array
    return a.price - b.price;
});
console.log(lowToHigh);

// highToLow
const highToLow = products.slice(0).sort((a,b) =>{
    return b.price - a.price;
});
console.log(highToLow);


// 6) find method::: (input --> callback function)
const users = [
    {user_id : 1 , user_name: "A"},
    {user_id : 2 , user_name: "B"},
    {user_id : 3 , user_name: "C"},
    {user_id : 4 , user_name: "D"}
];
const myUser = users.find((user)=>user.user_id === 3);
console.log(myUser);


// 7) every method::: (input --> callback function)
// --> return true/false 
// if every input is true --> return true  
// if every input is false --> return false

// lets check if price of ever product < 30000
const checkPrice = products.every((product)=>product.price<30000);
console.log(checkPrice);

// 8) some method::: (input --> callback function)
// if only one becomes true then also return true
const checkPrice2 = products.some((product)=>product.price > 40000);
console.log(checkPrice2);


// 9) fill method::: (value , start , end)
const array = new Array(5).fill(-1); 
const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,3,7)  // value , start , end
console.log(array);
console.log(myArray);


// 10) splice method::: (start , delete , insert)
const arrTest = ["A","B","C","D"];

// delete
arrTest.splice(0,2);
console.log(arrTest);

// insert 
arrTest.splice(1,0,'inserted item');
console.log(arrTest);

//insert with delete
const deletedItem = arrTest.splice(1,2,"inserted item1","inserted item2");
console.log(arrTest);
console.log("Deleted Items: ", deletedItem);


//  iterables:::
//  jispe hum for of loops lga skte h
//  string , array are iterable

//  array like objects:::
//  jinke paas length property hoti h
//  aur jinkoo hum index se access kr skte h
//  ex: string


// Sets::: (it is iterable)
// store data
// no index-based access
// order is not guranteed
// unique items only (no duplicates allowed)

const num = new Set([1,2,3]);

// add
num.add(27);
num.add("abc");
num.add(["A","B"]); // both the arrays are stored in different address so we can add them in set
num.add(["A","B"]);

//has --> return true/false depending upon the element is present in set or not
if(num.has(27)){
    console.log("present");
}
else{
    console.log("not present")
}
console.log(num);

// for of loop in set
for(let ele of num){
    console.log(ele);
}
