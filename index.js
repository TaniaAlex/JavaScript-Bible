/**
 * JavaScript is Dynamically Typed Language
 */
/**
 * EXAMPLE 1
 */
let myVariable;

console.log(myVariable); // undefined

myVariable = 10;

console.log(myVariable); // 10

myVariable = true;

console.log(myVariable); // true

//object type variable
myVariable = {
  x: true,
  y: 10
};

console.log(myVariable); // {x: true, y: 10}

myVariable.y = 20;

console.log(myVariable); // {x: true, y: 20}

// // THIS WILL BREAK THE CODE
// the type of an variable was change to null, thats why we cannot reassign its property "myVariable.x = false"
// myVariable = null;

myVariable.x = false; // Uncaught TypeError: Cannot set property 'x' of null

console.log(myVariable); // {x: false, y: 20}
/**
 * EXAMPLE 2
 */
let age = 30;
console.log(age) // 30
age = "tom"
console.log(age) // tom
/**
 * EXAMPLE 3
 */
function m(){
    console.log("Dynamic typing in JS");
}
m();
m = 90;
m(); //Uncaught TypeError: m is not a function

