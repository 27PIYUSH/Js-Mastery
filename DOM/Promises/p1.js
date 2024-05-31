// Promise --> asynchronous --> represents future value jo abhi nhi pta pr baad m pta chlegi
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];

// new Promise((resolve,reject)=>{}) --> class or constructor function

// produce --> promise created
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"}); // resolve function kuch bhi return kr skta h... array, object ,sting , etc.
    }else{
        reject("could not do it");
    }
})


// consume 
// how to consume --> browser consume krega promise ko
// .then(callBack) --> then ke andr resolve value aayegi promise ki
friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(    // jab promise reject hoga 
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=10; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")
// promise added in microtask queue
// setTimeout wala callBack queue m jaata h
// phle microtask wala run hoga kyuki usski priority jyada h


// function returning promise:::  // promise and setTimeout:::
// Ex -> resolve / reject promise after 2 sec 
function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

myPromise()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")})

// Promoise.resolve::: koi bhi value lega aur return m promise ki vhi value dega
// then() --> always return promise

const myPromisee  = Promise.resolve(5);
myPromisee.then((value)=>{
    console.log(value);
})

// Promise chaining:::
// .then is used for promise chaining
function myPromise3(){
    return new Promise((resolve,reject)=>{
        resolve("Mac");
    })
}

myPromise3()
    .then((value)=>{
        console.log(value);
        value += "Book";
        return value;   // also returns promise --> agr return nhi likha h toh next pr undefined jaayega 
    })
    .then((value)=>{
        console.log(value);
    })