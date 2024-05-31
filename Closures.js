"use strict";

// closures

// functions can return functions
function outerFunction(){
    function innerFunction(){
        console.log("wowww...");
    }
    return innerFunction;
}

const ans = outerFunction();
// console.log(ans);
ans();