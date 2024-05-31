const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data))

// async await ::: removes .then() work from fetch --> returns promise

console.log("script start");

async function getPosts(){
    const response = await fetch(URL); // await wait krega jb tak ye resolve nhi ho jaata --> return krega promise
    if(!response.ok){
        return new Error("Something went wrong")
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data; // promise hi return krega
}

// in case of arrow function ::: 
// const getPosts = async()=>{
//     if(!response.ok){
//         return new Error("Something went wrong")
//     }
//     const response = await fetch(URL); 
//     const data = await response.json();
//     return data;
// } 

getPosts()
    .then(myData => console.log(myData))
    .catch(error => console.log(error))

console.log("script end");

// async await wala kaam browser ka h issliye start tb end aur tb data aara h 