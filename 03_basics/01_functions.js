
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()      // calling a function defined recently


function addTwoNumbers(number1, number2){
    // 2 methods but working one is efficient as it saves memory of 1 variable
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)      // storing return of a function in a variable



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return      // break and go out of the function scope 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){   // here, "..." is k/s rest method and it returns array without pre-specified length
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// first 2 values will get assigned to val1, val2 and rest will be bounded into an array named 'num1' because of "...num1"

const user = {      // here, an object "user" is defined
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){    // anyobject is new name that access an object passed in this function when called
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})      // passes values to the function by defining object while calling it

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]  // getArray is a name dev-given, helps developer to not to remember array names while defining function but only when calling the function as below
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));