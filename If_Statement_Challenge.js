/*
Challenge 1

Do You Need More Coffee?

Write a script that:
Stores the number of cups (that a person has consumed) in a variable
If the person has had *less than* 3 cups
Log a message to the console saying: ("Yes I'll take another cup of coffee.")
If not
Log a message to the console saying ("I think I'm okay for now.")



Challenge 2

Does your car need an oil change?

Write a script that: Stores the number of miles(that a car has) in a variable
If the car has *more than* 500 miles
Log a message to the console saying:("Yes I think I need an oil change.")
If not
Log a message to the console saying:("My car doesn't need an oil change yet.")
*/

// console.log("Welcome to functions!");

// 1. Define your function

// function sayHello() {
//   console.log("Hello!");
// }

// 2. Call your function

// sayHello();

// // Methods: functions stored on an object
// console.log();
// Array.push();
// console.log("Hello everybody!");

// Define a function with a parameter
// function sayHello(firstName) {
//   console.log(`Hello, ${firstName}`);
// }

// Call the function with an argument
// sayHello("Bob");

// function restaurantGreeting(firstName) {
//   console.log(`Welcome to Red Lobster, ${firstName}`);

// //   console.log(firstName); // This works!
// }

// restaurantGreeting("Larry");

// console.log(firstName); // This doesn't work! :-(

// prompt("What is your favorite ice cream?"); // returns a string

// Functions can return values.

// function add(numOne, numTwo) {
//   return numOne + numTwo;
// }

// const total = add(1, 2);

// console.log(total);

// A function that does NOT return a value is called a void function.

// console.log("Welcome to functions!");

// 1. Define your function

// function sayHello() {
//   console.log("Hello!");
// }

// 2. Call your function

// sayHello();

// // Methods: functions stored on an object
// console.log();
// Array.push();
// console.log("Hello everybody!");

// Define a function with a parameter
// function sayHello(firstName) {
//   console.log(`Hello, ${firstName}`);
// }

// Call the function with an argument
// sayHello("Bob");

// function restaurantGreeting(firstName) {
//   console.log(`Welcome to Red Lobster, ${firstName}`);

// //   console.log(firstName); // This works!
// }

// restaurantGreeting("Larry");

// console.log(firstName); // This doesn't work! :-(

// prompt("What is your favorite ice cream?"); // returns a string

// Functions can return values.

// function add(numOne, numTwo) {
//   return numOne + numTwo;
// }

// const total = add(1, 2);

// console.log(total);

// A function that does NOT return a value is called a void function.

function generateArrayOfOddNumbers(maxNumber) {
    // Modulus operator
    const oddNumbers = [];
    for (let i = 0; i < maxNumber; i++) {
      if (i % 2 === 1) {
        oddNumbers.push(i);
      }
    }
    return oddNumbers;
  }
  
  const myArray = generateArrayOfOddNumbers(1000);
  console.log(myArray);