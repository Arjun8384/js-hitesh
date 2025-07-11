// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )    // forEach loop returns nothing, means 'undefined'

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4     // if we use parenthesis instead of curly braces, we do not need to use 'return' keyword (gives explicit return)
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {      // similar tp above but here using if-else to give condition
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => (bk.genre == "history"))
  console.log(userBooks)   // will return books of History genre as an object form defined above

  userBooks = books.filter( (bk) => {return bk.publish >= 2000 && bk.genre == "Scinece"})
  console.log(userBooks)

// -----------------------------------------Chaining method
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// using multiple methods like map and map/filter in a row, this is k/s chaining.
// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)      // num will have values returned from above map and so on
                .filter( (num) => num >= 40)
// maps return everything passed unconditionally but filter returns based on the condition
console.log(newNums);


// ------------------nine.js
//------------------Reduce method
// syntax
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);
// Expected output: 10


const myNums = [1,2,3,4]
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 5999
    },
    {
        itemName: "mobie dev course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);

//------Loops and Array methods end here
