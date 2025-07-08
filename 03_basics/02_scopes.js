// block scope is the scope defined within {}; that may be in a function, in a conditional block
// objects do not have scope like functions do
// var is not preferred as it defines the variable in global scope and hence lead to disturb other variable-values defined across the code file

// variables defined in global scope can be used in local scope but vice-versa is false

var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  // 10
    
}

// console.log(a);      // 300
// console.log(b);     // throw error saying b is not defined
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    // can't be accessed out of the function scope

     two()

}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);    // not defined error
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// it is known as hoisting


// console.log(addone(5))
function addone(num){
    return num + 1
}
// this method of defining the function allows to call it before defining but another method (shown below) does not allow


// addTwo(5)        // throws error
const addTwo = function(num){
    return num + 2
}
