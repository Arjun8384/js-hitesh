let score = "arjun"

// console.log(typeof score);
// console.log(typeof (score));  // both lines are same, result is string

let num = Number(score)
// console.log(typeof num); //number
// console.log(num);     //NaN

// summarizing all:
// "33" => 33
// "33abc" => NaN; type is number
// NaN- Not a number
// true => 1; false => 0

let isLoggedIn = "arjun"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)
// above will return 'true' as it has some value (arjun), false if empty

let numb = 23
let stringNum = String(numb)
console.log(stringNum)   //"23"
console.log(typeof stringNum)  //string


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion