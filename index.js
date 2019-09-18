/**
 * JS-BASICS/CORE/CHALLENGES/03-expressions-vs-statements
 * 
 */

// /**
// * TASK 1
// * 
// * Is it expression or statement?
// */
const myObject = {
  x: 10, 
  y: true
};

//Function Call is always Expression and it results in a value. Usually Function Calls are used standalone on a separate line of code, thats is why you should turn them into Expression Statement and add semicolon at the end;
console.log(delete myObject.x); // true //Expression Statement 
// "delete" operator is used in the expressions

// delete myObject.x; // Expression statement

// /**
//  * TASK 2
//  * 
//  * What will be logged to the console?
//  */
// Block of Statements -> NO semicolon at the end
function fn() {
  console.log("Greeting from the 'fn' function");

  return function(a) {
    console.log(a);
  };
}

fn() // Greeting from the 'fn' function
(true) // "true" because this line will be interpreted as function call with argument "true"

// /**
//  * TASK 3
//  * 
//  * Explain why semicolon is added?
//  */
function firstFunction(a, b) {
  return a + b;
} // Function Declaration - Semicolons are not required after Block of Statements

const secondFunction = function(a, b) {
  return a + b;
}; // Statement - each variable declartion using var, const or let is a Statement, that`s why emicolon was added at the end;