/**
 * JS-BASICS/CORE/CHALLENGES/04-scopes
 * 
 */
// /**
//  * TASK 1
//  * 
//  * Function scopes
//  * What will be logged to the console?
//  */
// const b = 2;
// let d = 15;

// function myFn1(a) {
//   let b;
// //   d = 10; // if we assign value of the global variable d here, instead of declaration, the answer 10 will logged in console
//   let d = 10;
//   myFn2(b);
// }

// // myFn2 is declared in global scope
// // there is no local variables in function scope with name b, d, that`s why we will look for it in global scope
// function myFn2(a) {
//   let c = 5;
//   console.log(a, b, c, d);
// }

// myFn1();

// // ANSWER: undefined, 2, 5, 15


// /**
//  * TASK 2
//  * 
//  * Strict mode
//  * Fix problems with the code below
//  */


// "use strict";

// function myFunction() {
//     // without strict mode variable "a" will be declared in the global scope and no errors will be logged to the console
//   a = 2;
//   return a;
// }

// myFunction(); // Uncaught ReferenceError: a is not defined

// // ANSWER
// "use strict";

// function myFunction() {
    // to make a function pure we have to declare a variable in local scope
//   let a = 2;
//   return a;
// }

// myFunction();


// /**
//  * TASK 3
//  * 
//  * Callback function
//  * What will be logged to the console?
//  */
setTimeout(function myFn() {
  console.log("Hello from myFn function");
}, 2000);

myFn();

// // ANSWER
// // Uncaught ReferenceError: myFn is not defined
// // "Hello from myFn function"

// // myFn function is simply an argument in function call. This function is not declared in a global scope. We trying to call our function myFn on the global level -> in global scope there is no such function declared -> ReferenceError

// // Now we see the difference between function declaration and passing named function as an argument in other functions call 
// // named function myFn here is just an EXPRESSION, thet is passed as an argument to other function