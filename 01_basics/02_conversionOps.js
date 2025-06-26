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
