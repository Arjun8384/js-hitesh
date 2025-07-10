// Arrays in JS
// different ways to define an array in JS

const myArr = [0, 1, 2, 3, 4, 5]        // arrays can store any type of data; different datatypes in one as well
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// Array methods

myArr.push(6)
myArr.push(7)  // add the element at the end of array
myArr.pop()     // deletes element at last index in array
myArr.unshift(9)    // add the element at 0th index and shift rest elements to next indices
myArr.shift()   // removes element at first index and restructure the array accordingly
console.log(myArr.includes(9)); // returns boolean result if value exists in the array
console.log(myArr.indexOf(3));  // returns index of the element
const newArr = myArr.join()    // binds old array into new array and return type change to string

// slice, splice
// A,B,C are names given to the arrays as tag
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // slices normally from a shallow copy of the original array; last index excluded

const myn2 = myArr.splice(1, 3)  // slice is done on deep copy i.e. elements deleted from old array and new array formed by those elements; AND the last index of range (here 3) is INCLUDED

//-------------02_arrays

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // the array is pushed as a single element in the another array
// console.log(marvel_heros[3][1]);     //  it will access "flash"

// const allHeros = marvel_heros.concat(dc_heros)       // merges 2 or more arrays and returns a new array without modifying existing arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]        // merges 2 or more arrays more efficiently, we can add multiple arrays to merge in one by similar method as it is
// above is also k/s spread operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)     // flats the multi-D arrays to 1-D array; Infinity can be replace depth number like 2 or 3, depending upon dimensions 2D or 3D
console.log(real_another_array);
const myArr = [0, 1, 2, 3, 4, 5]
const newCombo = [a,b, ...restVal]    // a=0, b=1 restVal = [2,3,4,5]; it is k/s rest operator


console.log(Array.isArray("Hitesh"))        // checks if it is array, returns boolean
console.log(Array.from("Hitesh"))       // make array from "sth"
console.log(Array.from({name: "hitesh"})) // interesting;  either make array fromm keys or values of the object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // makes array of values in these 3 variables
