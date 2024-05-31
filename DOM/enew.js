// intro to events:::

// to add events --> three ways
// 1) directly in html file --> not used oftenly
// 2)  
const btn = document.querySelector(".btn-headline");
// btn.onclick = () => console.log("you clicked me!!!");

// 3) addEventListner 
btn.addEventListener("click" , (event) => alert("you clicked me!!!"));

// this keyword
// event listner keliye arrow function ke this ki value window hogi 
// event listner keliye anonymous function ke this ki value btn khud hoga 


// event object:::
// when an event happens, the browser automatically creates an event object and passes it as a parameter to the function assigned to that event

// jab kisi bhi element pe event listner add hoga 
// js Engine ---- line by line code ko execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 kaam krega
// 1.) callback function hai vo js Engine ko dega ...... 
// 2.) callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 

// practice:
// target --> kis element ne event ko trigger kra
// currentTarget --> kis element pr event listner add kra tha 
btn.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "#00FFFF";
    event.target.style.color = "#FFF";
});

// keypress event:::
const body = document.body;
body.addEventListener('keypress', (e) => {console.log(e.key);}); // returns the key pressed from the keyboard

// mouseover event:::
btn.addEventListener("mouseover" , (e) => {console.log("mouse over event occured!!!");} , true);
btn.addEventListener("mouseleave" , (e) => {console.log("mouse leave event occured!!!");} , true);

// event bubbling / event propogation --> Event bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up to its parent and ancestor elements in the DOM tree until it gets to the root element. 

// event capturing --> Event capturing is one of two ways to propagate events in the HTML DOM. In event capturing, an event propagates from the outermost element to the target element. It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements.

// event delegation --> Event delegation in JavaScript is a technique that allows you to handle events for a group of elements by adding a single event listener to a common ancestor element, rather than adding a separate event listener to each element.

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // preventDefault --> page refresh krne se rokega
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button or not
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});



// synchronous programming vs asynchronous programming:::

// synchronous programming is a type of programming in which the program executes instructions in a sequential manner, one after the other
// ex -> 
// console.log("Script Start");
// for(let i = 0; i<100000; i++){
//   console.log("inside loop");   
// }
// console.log("Script end");   // line wise execute hoga toh mtlb neeche wala code block hora h



// setTimeout:::   
// console.log("script start");

// setTimeout(() => {
//   console.log("inside setTimeout");
// }, 1000);  // time delay in ms(milli sec)

// for(let i = 0 ; i<50 ; i++){
//   console.log("...");

// }

// console.log("script end");

// in this ex - setTimeout ki functionality web browser ke paas h js pe nhi
// toh normally execute krega pr jese hi set time out aayega toh js ussko browser ko de dega tb browser uthe hi (1000ms) time tak apne paas rkhega aur jese hi js ka callStack empty hoga vo setTimeout wala callBack queue se nikl kr js callStack m chla jaayega
// so o/p --> script start , script end ,inside setTimeout

// agr set timeout ki valu 0 h toh bhi same hi hoga phle js apne code ko execute krega aur tb setTimeout wala event loop ki vjah se


console.log(" ");

// clearTimeout:::  used to clear the set time out  
console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);  // time delay in ms(milli sec)

for(let i = 0 ; i<50 ; i++){
  console.log("...");
}

console.log("settimeout id is: ", id);
console.log("clearing time out");
clearTimeout(id);

console.log("script end");