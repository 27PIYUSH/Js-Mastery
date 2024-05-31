const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch() --> returns promise

const whatisthis = fetch(URL);
console.log(whatisthis);

fetch(URL)
    .then(response => {
        // console.log(response.json());
        if(response.ok){  // error ke case m bhi response milega hi (response.ok = false)... agr error nhi hua toh response = true ... issliye ye condition lgayi h taaki error de ske and catch block run ho
            return response.json();
        }
        else{
            throw new Error("Something went wrong");
        }
    })
    .then(data => {
        // console.log(data);
        return data;
    })
    .catch(error => {  // without net chl jaayega
        console.log("inside catch");
        console.log(error);
    })