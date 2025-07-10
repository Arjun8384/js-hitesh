// Maps

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
