// normally defined funtion
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);      // 'this' keyword refers to current scope
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);      // returns empty object '{}'

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = function () {
    let username = "hitesh"
    console.log(this.username);  // returns all globally available info
    //console.log(this.username);  // can't use 'this'inside a function while defining; will return undefined
}
chai()

// here is "ARROW" function defined (function() keyword is replaced by '() =>')
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
       //console.log(this.username);  // can't use 'this'; will return undefined

// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return; if {} used, have to use return but not needed with ()

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})   // object


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();       // ; is must to tell where function code ended
// parenthesis () used to wrap the function for IIFE; protects from global pollution in code
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')