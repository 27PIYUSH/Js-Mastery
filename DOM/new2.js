// browser creates DOM Tree - store elements in tree format and we can traverse it

// access elements of the DOM Tree::
const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);  //dir --> object representation
console.log(htmlElementNode.childNodes);
 
const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);

const textElementNode = htmlElementNode.childNodes[1];
console.log(textElementNode);

const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);

console.log(headElementNode.parentNode);
console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextElementSibling);

// DOM traversing
const h1 = document.querySelector("h1");
const body = h1.parentNode.parentNode;
body.style.color = "white";
body.style.backgroundColor = "#333";

const container = document.querySelector(".container");
console.log(container.childNodes);
console.log(container.children); // if we dont want textNode

// directly select:::
const bodyy = document.body;
console.log(bodyy);
const headd = document.head;
console.log(headd);
const title = document.title;
console.log(title);