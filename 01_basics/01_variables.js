//";" at the end of a line is not necessary in JS
const accId = 134343    //accId is just a variable, just try to name it something readble
let accMail = "arjun@gmail.com";
var accPass = "12324"
actCity = "Jaipur"
let accState  // allowed to not filling any value in it, only declaration
// accId = 2 It is not allowed to declare without giving any type let/var/const

accMail = "akr@ar.com"
accPass = "123232"
actCity = "Bengaluru"

console.log(accId)
console.log(actCity)

/*
Prefer not to use "var" because of issue in block scope and functional scope
*/

console.table([accId, accMail, accPass, actCity, accState])