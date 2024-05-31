"use strict";
// DOM ::: Document Object Model

console.dir(document); // Js representation of document object

// select element using get element by id --> only select using id's
const mainHeading = document.getElementById("main-heading"); // returns object
console.log(mainHeading);

// select element using query selector --> can select any query
const mainHeading2 = document.querySelector("#main-heading");
console.log(mainHeading2);

const header = document.querySelector(".header");
console.log(header);

const navItem = document.querySelectorAll(".nav-item"); // querySelectorAll --> agr multiple classes same name se h toh sbko select krega 
console.log(navItem);


// change text:::
// textContent and innerText
console.log(mainHeading.textContent); // gives hidden element also --> Manage your tasks Hello 
console.log(mainHeading.innerText); //doesn't show hidden text
mainHeading.textContent = "YOUR TASK...";
console.log(mainHeading.textContent);
 

// change the style of elements::: 
const mainHeading3 = document.querySelector("div.headline h2"); // we cann also select any css selector or tags 
console.log(mainHeading3.style);
mainHeading3.style.color = "black";
mainHeading3.style.backgroundColor = "pink"; // we cannot write the properties like background-color instead we use camel case backgroundColor  

// get and set attributes:::
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));

// const element = document.querySelector(".form-todo input");
// console.log(element.getAttribute("type"));


// :::
// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

const navItems = document.getElementsByClassName("nav-item"); // return HTMLCollection --> cannot use forEach method to iterate through HTMLCollection  
console.log(navItems);

const navItemss = document.getElementsByTagName("a");
console.log(navItemss);

// for (let i = 0; i < navItemss.length; i++) {
//     const navItem = navItemss[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

const navItems2 = document.querySelectorAll(".nav-item"); // return nodeList --> can use any type of for loop
console.log(navItems2);

let navItemss2 = document.querySelectorAll("a");
// to change it into array:::  and can use any array method
navItemss2 = Array.from(navItemss2);
console.log(Array.isArray(navItemss2));

for(let navItem of navItemss2){
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}


// innerHTML --> returns the text content of the element including all spacing and inner Html Tags
const headline = document.querySelector(".headline");
console.log(headline);
// change
headline.innerHTML = "<h1> InnerHTML changed</h1>";
headline.innerHTML += "<button class = \"btn\"> Learn more</button>";  // button added using innerHTML --> string ke andr double quotes add nhi kr skte issliye --> (\"...\") back slash use krte h
console.log(headline.innerHTML);

// work with classes:::

// classList property --> gives all the classes in selected class
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);

// add class using js
sectionTodo.classList.add("bg-dark");
console.log(sectionTodo.classList);

// remove class using js
sectionTodo.classList.remove("bg-dark");
console.log(sectionTodo.classList);

// check whether class exist or not --> return true/false
const ans = sectionTodo.classList.contains("bg-dark");
console.log(ans);

// toggle --> if class is present then it will remove else it will add 
sectionTodo.classList.toggle("bg-dark");
console.log(sectionTodo.classList);
sectionTodo.classList.toggle("bg-dark");


// innerHTML --> performance issue... don't use when you want to add or remove
// use it when you want to change the whole inner html 

// innerHTML to add html element::
const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo...</li>";
todoList.innerHTML = todoList.innerHTML + "<li>New Todo...</li>"

// mostly used:::
// document.createElement()
// append --> add element in the last
// prepend --> add element at the start
// remove
// before --> insert after
// after --> insert before

// create:::
const newTodoItem = document.createElement("Li");
// const newTodoItemText = document.createElement("Teach");
// newTodoItem.appendChild(newTodoItemText);

// append & prepend:::
newTodoItem.textContent = "Task"; // append (new & chrome) --> appendChild (old & used in internet explorer)
todoList.append(newTodoItem);
console.log(newTodoItem); 


// before & after:::
todoList.after(newTodoItem);


// remove:::
// todoList.remove();


// elem.insertAdjacentHTML(where,html)  --> less used kyuki nya html bnana pdega aur future m use krne keliye select krna pdega
// beforebegin  
// afterbegin  --> prepend wala kaam krega
// beforeend  --> append wala kaam krega
// afterend
todoList.insertAdjacentHTML("afterbegin","<li>task 01</li>");

// clone nodes:::
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new-todo";
const li2 = li.cloneNode(true); // cloneNode --> write true for deep cloning 
ul.append(li);
ul.prepend(li2);

// some old methods to support poor IE::
// appendChild
// insertBefore 
// replaceChild
// removeChild

// appendChild
// const ul2 = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todoo";
// ul2.appendChild(li);

// insertBefore 
// const ul2 = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todoo";
// const referenceNode = document.querySelector(".first-todo"); 
// ul2.insertBefore(li,referenceNode);

// replaceChild
// ul2.replaceChild(li,referenceNode);

// removeChild
// ul2.removeChild(referenceNode);


// static list vs live list:::
// querySelectorAll --> static list --> less space --> mostly used --> NodeList
// getElementsBySomething --> live list --> extra space --> HTMLCollections
const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "Sixth Item";
const x = document.querySelector(".todo-list");
x.append(sixthLi);
console.log(listItems); // gives node list 

const y = document.querySelector(".todo-list");
const listItems2 = y.getElementsByTagName("li");
const seventhli = document.createElement("li");
seventhli.textContent = "seventh Item";
y.append(seventhli);
console.log(listItems2);  // gives html collection


// how to get dimensions of element
// height width
const info = sectionTodo.getBoundingClientRect().height;
const infoAll = sectionTodo.getBoundingClientRect();
console.log(info);
console.log(infoAll);