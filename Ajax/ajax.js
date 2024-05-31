// // BASIC THEORY::: 

// // AJAX : asynchronous javascript and XML

// // HTTP request --> client - server communication

// // is a set of "web development techniques" 
// // using many web technologies on the "client-side "
// // to create asynchronous web applications. 


// // With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page

// // We don't use data in XML format anymore. 
// // we use JSON now. 


// // we have 3 most common ways to create and send request to server
// // 1.) xmlHTTPRequest (old way of doing)
// // 2.) fetch API (new way of doing)
// // 3.) axios (this is third party library)


// // XHR:::
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// // console.log(xhr.readyState);
// xhr.open("GET",URL);
// // console.log(xhr.readyState);
// xhr.onreadystatechange = function(){ // jb state change hogi tbhi chlega
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr.response); 
//         const response = xhr.response;
//         const data = JSON.parse(response); // response string format aarha h json file m toh issliye usko object form m bdl rhe h
//         console.log(data);
//         console.log(typeof data);
//     }
//     console.log();
// }

// xhr.onload = () => {   // on load tbhi chlega jb readyState = 4 hoga  ... so upr wali if condition use krne ki jrurt nhi
//     if(xhr.status >= 200 && xhr.status < 300){   // error handling
//         console.log(xhr.readyState);
//         const data = JSON.parse(xhr.response);
//         console.log(data);

//         const id = data[4].id;  // particular chij access krna poore object se
//         console.log("id = ",id);

//         // iss id pr request krna h toh 
//         const xhr2 = new XMLHttpRequest();  // creates callBack hell  
//         const URL2 = `${URL}/${id}`;
//         xhr2.open("GET",URL2);
//         xhr2.onload = () => {
//             const data2 = JSON.parse(xhr2.response); 
//             console.log(data2); 
//         }
//         xhr2.send();
//     }
//     else{
//         console.log("error postss");
//     }
// }
// xhr.onerror = () => {  // only for network errors
//     console.log("network error");
// }
// xhr.send();

// // readyState
// // Value	 State	                      Description
// // 0	    UNSENT	               Client has been created. open() not called yet.
// // 1	    OPENED	               open() has been called.
// // 2	    HEADERS_RECEIVED	   send() has been called, and headers and status are available.
// // 3	    LOADING	Downloading;   responseText holds partial data.
// // 4	    DONE	               The operation is complete.

// // status codes
// // 1xx informational response – the request was received, continuing process
// // 2xx successful – the request was successfully received, understood, and accepted
// // 3xx redirection – further action needs to be taken in order to complete the request
// // 4xx client error – the request contains bad syntax or cannot be fulfilled
// // 5xx server error – the server failed to fulfil an apparently valid request

// promise:::
const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method,url){
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Somethig went wrong"));
            }
        }

        xhr.onerror = ()=>{
            reject(new Error("Somethig went wrong"));
        }

        xhr.send();
    })
}

sendRequest("GET",URL)
    .then(response =>{
        const data = JSON.parse(response);
        // console.log(data);
        return data;
    })
    .then(data=>{
        const id = data[4].id;
        // console.log(id);
        return id;
    })
    .then(id=>{
        const url = `${URL}/${id}`;
        return sendRequest("GET",url);
    })
    .then(newResponse => {
        // console.log(newResponse);
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
