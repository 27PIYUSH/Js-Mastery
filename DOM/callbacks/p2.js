const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            //   resolve("resolved");
            }else{
              reject("Element not found");
            }
          },time)
    })
}

changeText(heading1, "one", "violet", 1000)
    .then(()=>{return changeText(heading2, "two", "purple", 1000)})  // jb ye promise dega tb next chlega agr return nhi likha toh promise immidiately resolve hoga undefined ke saath
    .then(()=>{return changeText(heading3, "three", "red", 1000)})
    .then(()=>{return changeText(heading4, "four", "pink", 1000)})
    .then(()=>{return changeText(heading5, "five", "green", 1000)})
    .then(()=>{return changeText(heading6, "six", "blue", 1000)})
    .then(()=>{return changeText(heading7, "seven", "cyan", 1000)})
    .then(()=>{return changeText(heading8, "eight", "brown", 1000)})
    .then(()=>{return changeText(heading9, "nine", "yellow", 1000)})
    .then(()=>{return changeText(heading10, "ten", "orange", 1000)})
    .catch((error)=>{
        alert(error);
    })