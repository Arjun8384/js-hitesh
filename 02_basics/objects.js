// singleton    // it means only instance can exist
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",        // it specifies its datatype as symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// Ways to access object data
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)    // it freezes the object to change its data here onwards
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){        // adding a function in a object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){        // referring to a variable of an object
    console.log(`Hello JS user, ${this.name}`);        // "this" refers to the same object to access one of its variable
}        // ${`....`} its an efficient way to print variable value

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//------------- object part 2

const tinderUser = new Object()    // singleton object
const tinderUser = {}    // non-singleton object
// creating object properties
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {            // object with some depth (here 2) like multi-D arrays
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);    // it will print "hitesh"

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }    // this method always merge objects in first object
// const obj3 = Object.assign({}, obj1, obj2, obj4)     // so we create an empty object at first index (0th) 

const obj3 = {...obj1, ...obj2}        // most effiient way to merge, like arrays, can be add more to merge easily
// console.log(obj3);    

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
//---------------------------object data accessing in required form like
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // checks if this object has this property or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course    // it tells "courseInstructor" will be k/s instructor, like pandas as pd

// console.log(courseInstructor);
console.log(instructor);


// JSON file also has following data format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// objects inside an array
[
    {},
    {},
    {}
]
