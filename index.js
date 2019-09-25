/**
 * "typeof" and "instanceof" Operators
 * are Unary Prefix Operators with one operand
 */
// const one = 1;
// if (typeof one === "number"){
//     alert ("It is a number!")
// }

// typeof []    // "object"
// typeof {}     // "object"
// typeof null   // "object"

// prototype chain: array -> object
// const b = [];
// console.log(b instanceof Array); //true // {}__proto__: Array
// console.log(b instanceof Object); //true // {}__proto__: Object

// const d = {};
// console.log(d instanceof Array); //false // {}__proto__: Object
// console.log(d instanceof Object); //true // {}__proto__: Object

// //Array, Object, String, Number, Boolean are global variables - function constructors and are used to create a new instance of array, object etc.
// const str1 = "It is a string";
// console.log(str1 instanceof String); //false

// const num1 = 398;
// console.log(num1 instanceof Number); //false

// const n1 = true;
// console.log(n1 instanceof Boolean); //false

// // to check if it array use "instanceof Array" operator
// // to check all other use "typeof" operator
// const songs = [1, 5, 7, 9];
// if (songs instanceof Array){
//     console.log ("It is a array!")
// }

// // ******************************
// // Options to create a new array
// // Option 1 - Array literal notation
// const mArr1 = [];
// console.log(mArr1);
// const mArr3 = [1,2,5];
// console.log(mArr3);

// // Option 2 - Array function constructor
// const mArr2 = new Array();
// console.log(mArr2);
// const mArr4 = new Array(1,2,5);
// console.log(mArr4);

// // ******************************
// // Options to create a new String
// // Option 1 - String literal notation
// const mStr3 = "string3";
// console.log(mStr3); // abc // primitive value
// console.log(typeof mStr3); // string
// console.log(mStr3 instanceof Object ); // false
// console.log(mStr3 instanceof String ); // false
// // but you can still call all the methods of the String Prototype. Variable string3  still holds Primitive Value and will be converted to the instance of String only for purpose of using methods that belong to String Prototype
// console.log(mStr3.toUpperCase()) // ABC
// console.log(mStr3.length) // 7

// // Option 2 - String function constructor
// const mStr4 = new String("string4");
//  console.log(mStr4); // String {"string4"} // is object //
//                     //__proto__: Object
//                     // [[PrimitiveValue]]: ""
//                     // [[PrimitiveValue]]: "string4"
// console.log(typeof mStr4); // object
// console.log(mStr4 instanceof Object ); // true
// console.log(mStr4 instanceof String ); // true

// // here you can use all the methods of String Prototype
// console.log(mStr4.toUpperCase())
// console.log(mStr3.length) // 7

// ******************************
//Create an Object using "new" keyword and call Object() function
// const mObj1 = new Object({a: 20, b: 34});

// // Create an Object using object literal
// const mObj2 = {a: 10, b: 23};
// console.log(mObj1);
// console.log(mObj2);
// console.log(typeof mObj1); // object
// console.log(mObj1 instanceof Object ); // true
// console.log(mObj1 instanceof Function ); // false

// const mFn1 = new Function("b", "console.log(b);");
// console.log(typeof mFn1); // function
// console.log(mFn1 instanceof Object ); // true
// console.log(mFn1 instanceof Function ); // true
// mFn1("function1 created with NEW Keyword")

// const mFn2 = function(a){
//     console.log(a)
// };
// mFn2("function2");
// console.log(typeof mFn2); // function
// console.log(mFn2 instanceof Object ); // true
// console.log(mFn2 instanceof Function ); // true

// ******************************
// // EXAMPLE 1.1 - global and function execution contexts
// // Global execution context
// console.log("This is global execution context");

// const a = 10;

// console.log(a);

// function myFunction(a, b) {
//   console.log("This is function execution context");
//   return a + b;
// }

// console.log(myFunction(5, 20)); // new function execution context is created

// console.log(myFunction(3, 5)); // new function execution context is created

// ******************************
// // EXAMPLE 2 - Execution contexts stack

// console.log("Global execution context - root level in the stack");

// function firstLevel() {
//   console.log("Function execution context - second level in the stack");

//   function secondLevel() {
//     console.log("Function execution context - third level in the stack");

//     function thirdLevel() {
//       console.log("Function execution context - fourth level in the stack");
//     }

//     thirdLevel();
//   }

//   secondLevel();
// }

// firstLevel();

// ******************************
// // EXAMPLE 3.1 - "this" in the global execution context

// console.log(this); // global object - Window
// console.log(this === window); //true
// this.console.log("Method of this");

// // EXAMPLE 3.2 - "this" inside of the function is equal to the object on which this function is called
// function myFn() {
//   console.log(this);
// }
// myFn(); // Window
// window.myFn(); // Window

// // EXAMPLE 3.3 - "this" inside of the function in strict mode
// "use strict";
// function myFn() {
//   console.log(this);
// }
// myFn(); // undefined
// window.myFn(); // Window

// // EXAMPLE 3.4 - "this" inside of the methods of the objects
// const person1 = {
//   name: "Mia",
//   age: 23,
//   greeting: function() {
//     console.log(this); // {name: "Mia", age: 23, greeting: ƒ}
//     console.log(`Name of the person is ${this.name} and age is ${this.age}`); // Name of the person is Mia and age is 23
//   }
// };

// person1.greeting(); // "this" inside of the function is equal to this object

// greeting(); // Uncaught ReferenceError: greeting is not defined // greeting is a property of the object person1, and not the global scope variable

// // EXAMPLE 3.5 - "CALL" - custom "this"
// // Every function in JS is an Object and Instance of the Function. That means that all methods, located in proptotype are available for each function

// const myObj = {
//   a: 30,
//   b: 40
// };

// function myFn() {
//   console.log(this);
// }
// myFn(); // "this" is Window
// myFn.call(myObj); // "this" is custom Object { a: 30, b: 40 }

// // EXAMPLE 3.6 - "CALL" - custom "this" and arguments

// const myObj = {
//   a: 30,
//   b: 40
// };

// function myFn(a, b) {
//   console.log(a + b);
//   console.log(this);
// }
// // myFn(); // "this" is Window
// myFn.call(myObj, 50, 30); // "this" is custom Object { a: 30, b: 40 }

// // EXAMPLE 3.7 - "CALL" - call method of the object with other object as "this"

// const client1 = {
//   name: "Alex",
//   city: "Frankfurt",
//   info: function() {
//     console.log(`${this.name} lives in ${this.city}`);
//   }
// };
// const client2 = {
//   name: "Mia",
//   city: "Erfurt"
// };

// client1.info(); // Alex lives in Frankfurt
// client1.info.call(client2); // Mia lives in Erfurt

// // EXAMPLE 3.8 - "APPLY" - custom "this" and arguments
// // 1st argument - custom "this", 2d - array of arguments

// const myObj = {
//   a: 10,
//   b: null
// };

// function myFn(a, b, c) {
//   //   console.log(a + b + c);
//   //   console.log(this);
//   let sum = a + b + c;

//   for (let key in this) {
//     if (typeof this[key] === "number") {
//       sum += this[key];
//     }
//   }
//   console.log(sum);
// }
// // myFn(); // "this" is Window
// myFn.apply(myObj, [50, 30, 20]); // "this" is custom Object { a: 30, b: 40 }

// EXAMPLE 3.9 - "BIND" - custom "this" and arguments

const myObj = {
  a: 10,
  b: null
};

function myFn(a, b) {
  console.log(a + b);
  console.log(this);
}

const customFn1 = myFn.bind(myObj, 2, 30); // preset "this" and both arguments
customFn1(); // 32

const customFn2 = myFn.bind(myObj); // preset only "this", so we can call this function with any arguments we want
customFn2(22, 30); // 52 // call with custom arguments

const customFn3 = myFn.bind(myObj, 2); // preset "this" and only first arguments
customFn3(17); // 19 // pass remaining arguments
