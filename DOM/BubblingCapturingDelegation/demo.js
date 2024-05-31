const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event Bubbling/Event Propagation  --> Event bubbling is a concept in the DOM. It happens when an element receives an event, and that event bubbles up to its parent and ancestor elements in the DOM tree until it gets to the root element.
// not capture:::
// child.addEventListener("click",() => {
//     console.log("capture !!!! child");
// });

// parent.addEventListener("click",() => {
//     console.log("capture !!!! parent");
// });

// grandparent.addEventListener("click",() => {
//     console.log("capture !!!! grandparent");
// });

// document.body.addEventListener("click",() => {
//     console.log("capture !!!! document.body");
// });

// capturing events --> In event capturing, an event propagates from the outermost element to the target element. It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements.
// the cycle of capturing and bubbling occurs --> capturing sbse phle outer layer dekhta h ki koi event capture hora h kya --> body , grandParent , Parent , child  aur tb bubbling m sbse phle dekhta h konsa event hora h --> child , Parent , grandParent , body
child.addEventListener("click",() => {
    console.log("capture !!!! child");
},true);

parent.addEventListener("click",() => {
    console.log("capture !!!! parent");
},true);

grandparent.addEventListener("click",() => {
    console.log("capture !!!! grandparent");
},true);

document.body.addEventListener("click",() => {
    console.log("capture !!!! document.body");
},true);


// Event delegation --> is a technique that allows you to handle events for a group of elements by adding a single event listener to a common ancestor element, rather than adding a separate event listener to each element.
// grandparent pe lgaya h toh isske andr hi parent aur child bhi h --> jisspe cilick krenge vo milega
grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});