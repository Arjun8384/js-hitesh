// in this file, Map, for-in loop, forEach loop
// --------------------------Maps----------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);

// to return above map in desired format, give it along with forof loop
for (const [key,value] of map) {
    console.log(key, ":", value)
}


// to iterate objects, we use 'forin' loop
const programming = {
    js: "javascript",
    cpp: "C++",
    java: "Java"
    rb: "Ruby"
}

for (const key in programming) {
    // console.log(`${key} is shortcut for ${programming[key]}`)
    // it will return key at first and their values in 2nd
}
//---------------------for in loop------------------------------
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    // it will return all values one at one but below will print array.length no. of times the same array
    // console.log(programming)
}

// Note:- Maps also can be iterated by forin loop
// for (const key in map) {
//     console.log(key);
// }

//----------------------forEach loop-----------------------------
//###### forEach loop in an Array, a function is defined without naming it; b/c its a callback function; even when calling a function in forEach like "coding.forEach(printMe)" (coding is array name, printMe is some function), we do not use () after function name (printMe)
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){
    console.log(val);
} )
// forEach with arrow function
coding.forEach( (item) => {
    console.log(item);
} )
coding.forEach( (item, index, arr)=> {        // actual format of forEach loop
    console.log(item, index, arr);
} )

// object iteration using forEach loop
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
