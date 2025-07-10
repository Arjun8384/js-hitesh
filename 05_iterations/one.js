// in this file, loops covered: for, while, do-while, forof

// jumpt statements: break- breaks the loop immediately, continue- ignore that iteration and let go further
// for loop

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
    
}

// while loop
let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

// do-while loop
do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);
// notice the ';' at the end of do-while loop


// forof loop
// special abt forof loop is no declaration, initial. or inc/dec, range is required to give like in for, while, do-while loop
// forof loop is used to iterate arrays, strings but OBJECTS CAN NOT BE ITERATED using this loop
for (const element of object) {     // here, element- variable, object- any object like array, string that to be iterated
    // conosle.log(element)
}

// string iteration example using forof loop
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
