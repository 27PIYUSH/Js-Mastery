"use strict";
// only for understanding:::
const obj1 = {
    key1: "value1",
    key2: "value2"
}

// to create an empty obj --> but this is also linked with other objects:::
const obj2 = Object.create(obj1);
console.log(obj2); // {} created

obj2.key3 = "value3"; // new key created
console.log(obj2.key3);

console.log(obj2.key1); // can also access elements of obj1
// if value is not present on the object then javascript will find it in its __proto__ --> in this case __proto__ of obj2 is obj1  
// in official ecmascript documentation __proto__ is written as [[prototype]] 
console.log(obj2.__proto__);
console.log(" ")


// 1) to create a function (that function create object)
// 2) add key value pair
// 3) return object

// const userMethods = {
//     about: function(){
//         return `${this.fname} is ${this.age} years old`;
//     },
    // is18: function(){
    //     return this.age >= 18;
    // },
    // sing: function(){
    //     return `lalalalalalalala....`;
    // }

//     // add any no. of functions here it will be stored in __proto__ 
// }
// agr multiple users h toh multiple methods bnenge iss tareeke se toh utni hi memory fill hogi aur humko bbar baar methods ki jrut nhi 1 baar hi chahiye use krne ko
// no need for this function as createUser function already gives space (prototype) to add other function in it

// prototype:::

// javascript function --> function + object so function can be treated as object
// whenever we create function a free space is created {} 
// only functions provide prototype property

function createUser(fname,lname,email,age,address){
    // const user = Object.create(userMethods); // {} for __proto__ --> reference to chain
    const user = Object.create(createUser.prototype); // link proto and prototype
    user.fname = fname;
    user.lname = lname;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods.about;  // reference store krdiya h methods ka mtlb khin pr bne hue h ab bss use krte time JS call krega
    // user.is18 = userMethods.is18;  // jitne methods chahiye utni baar idhr bhi likhna pdega methods create krke 
    return user;
}

createUser.prototype.about = function(){
    return `${this.fname} is ${this.age} years old`;
};

createUser.prototype.is18 = function(){
    return this.age >= 18;
};

createUser.prototype.sing = function(){
    return `la la la....`;
};

const user1 = createUser('Pragati' , 'Bhardwaj' , 'pragatibhardwaj69@gmail.com' , 19 , 'kotdwara');
const user2 = createUser('Pragati' , 'Bhardwaj' , 'pragatibhardwaj69@gmail.com' , 19 , 'kotdwara');
const user3 = createUser('Pragati' , 'Bhardwaj' , 'pragatibhardwaj69@gmail.com' , 19 , 'kotdwara');
console.log(user1);
console.log(user1.sing());

// new keyword:::
// 1) empty object this = {}
// 2) return this/{}
// 3) automatically link __proto__ and prototype 

// constructor function
function CreateUserNew(fname,lname,email,age,address){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUserNew.prototype.sing = function(){
    return `la la la....`;
}
const newUser1 = new CreateUserNew('Piyush' , 'Sati' , 'piyushsati69@gmail.com' , 20 , 'Delhi NCR');
console.log(newUser1);

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){  //dosen't include prototype keys
        console.log(key);
    }
}


// class keyword:::
class createUsers{
    constructor(fname,lname,email,age,address){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.fname} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return `la la la....`;
    }
}

const users = new createUsers('Pragati' , 'Bhardwaj' , 'pragatibhardwaj69@gmail.com' , 19 , 'kotdwara');
console.log(users);
console.log(users.is18());
console.log(Object.getPrototypeOf(users));

// oops concept is same as java --> extends --> inheritence , super() --> used to access and call on an objects's parent

// getter and setter:::
class Person{
    constructor(fname,lname,age){
        this.fname= fname;
        this.lname = lname;
        this.age = age;
    }

    // get --> to use function as a property
    get fullname(){
        return `${this.fname} ${this.lname}`;
    }

    set fullName(fullname){
        const [fname , lname] = fullname.split(" ");
        this.fname = fname;
        this.lname = lname;
    }

    // static methods and static properties::: called directly with class 
    static classInfo(){
        return `this is person class`;
    }
    static desc = "abcdef";
}

const person1 = new Person("XYZ", "ABC",67);
person1.fullName = "Felix Feels";
console.log(person1);
console.log(person1.fullname); 
console.log(Person.classInfo());
console.log(Person.desc);