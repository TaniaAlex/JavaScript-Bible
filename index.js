/**
 * JS-BASICS/CORE/CHALLENGES/02-operators
 * 
 */

// /**
//  * TASK 1
//  * 
//  * Compare 2 variables "myVariable1" and "myVariable2".
//  * Log to the console "true" if "myVariable1" is less than or equal to "myVariable2".
//  * Convert both variables to numbers before comparison.
//  */

let myVar1 = 30;
let myVar2 = "2";
console.log(+myVar1 <= +myVar2); //false

myVar1 = "7";
myVar2 = 32;
console.log(+myVar1 <= +myVar2); //true

// let myVariable1 = 10;
// let myVariable2 = "5";

// console.log(+myVariable1 <= +myVariable2);

// myVariable1 = "20";
// myVariable2 = 100;

// console.log(+myVariable1 <= +myVariable2);



// /**
//  * TASK 2
//  * 
//  * Print to the console remainder of the division of "myNumber1" by "myNumber2".
//  * Which precedence and associativity has this operator?
//  */
let myNum1 = 40;
let myNum2 = 7;
console.log(myNum1 %  myNum2); // remainder = 5; left-to right


// let myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
// let myNumber2 = 3;

// console.log(myNumber1 % myNumber2); // 1
// console.log(25 % 5); // 0
// console.log(14 % 8); // 6

// console.log(100 % 30 % 3); // 1 - left-to-right


// /**
//  * TASK 3
//  * 
//  * What will be logged to the console?
//  */
console.log(3 || true && null || false);  // 3
// // it will be evaluated left-to-right -> OR has 6; AND has 5 Precedence
// // STEP 1: true && null -> null // we will evaluate this expression first, because AND operator has a higher Precedence -> AND operator returns FIRST FALSY operant
// // STEP 2: 3 || null -> 3 -> OR operator returns FIRST TRUTHY operant
// // RESULT: 3



// /**
//  * TASK 4
//  * 
//  * Find alternatives
//  */
// let a = 10;

//in this task we perform reassignment of the value of the variable a
// // a = a + 1;
// a += 1; //right-to-left
// console.log(a); // 11

// // a = a * 2;
// a *= 2;
// console.log(a); // 22

// // a = a - 5;
// a -= 5;
// console.log(a); // 17

// // a = a / 2;
// a /= 2;
// console.log(a); // 8.5