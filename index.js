// /**
//  * SECTION 1
//  * 
//  * Arithmetic Operators
//  */
// let a, b;
// a = 1;
// b = 2;

// // // Math with numbers
// // console.log(a + b); // 3
// // console.log(a * b); // 2
// // console.log(a / b); // 0.5
// // console.log(a - b); // -1

// a = "abc";
// b = -3;
// // c = null;
// // d = undefined;

// // // Math with non-numbers
// console.log(a + b); // abc5
// console.log(a * b); // NaN
// console.log(a / b); // NaN
// console.log(a - b); // NaN
// // console.log(c - d); // NaN
// // console.log(c * d); // NaN


// a = "Guten";
// b = "Tag!";

// // // Strings concatenation
// // // "+" operator can be used for concatenation of the string
// console.log(a + " " + b);

// let c = "1";

// // // Unary plus
// // // Can be used to convert string to numbers. Users fill the contact form, ypu process this field. Some of them may containe numbers. But when you read them from the DOM, you get strings. Than you can use UNARY + operator to convert some field like age to numbers.
// console.log(+c); // 1
// console.log(Number(c)); // 1
// c = undefined;
// console.log(+c); // NaN

// // Unary minus
// c = "5";
// console.log(-c); // -5
// c = "abc";
// console.log(-c); // NaN

// // ++
// let d = 5;
// ++d; // Same as d = d + 1
// console.log(d); // 6
// d++;
// console.log(d); // 7

// // // PREFIX NOTATION OPERANT
// // // Built-in "++" function, when used as PREFIX OPERATOR,  FIRST INCREMENTS value of the operand and SECOND RETURNS value of the operand
// console.log(++d); // 8
// // // POSTFIX NOTATION OPERANT
// // // Built-in "++" function, when used as POSTFIX OPERATOR,  FIRST RETURNS value of the operand and SECOND INCREMENTS value of the operand
// console.log(d++); // 8
// console.log(d); // 9

// // // --
// console.log(d--); // 9
// console.log(d); // 8
// console.log(--d); // 7 - Same as d = d - 1
// console.log(d); // 7




// /**
//  * SECTION 2
//  * 
//  * Comparison operators return true or false
//  */
// // Numbers comparison
// let a, b, c;

// a = 5;
// b = 7;
// c = 5;

// console.log(a < b);
// console.log(a > b);

// console.log(a <= c);
// console.log(a >= c);

// console.log("____");

// // Strings comparison
// let myStr1, myStr2, myStr3;

// myStr1 = "abc";
// myStr2 = "bcd";
// myStr3 = "Bcd";
// // Sorted strings "Bcd", "abc", "bcd"

// console.log(myStr1 > myStr2); // false
// console.log(myStr1 < myStr2); // true

// console.log(myStr1 > myStr3); // true

// console.log("____");

// // Equality operators
// // NEVER USE "==" and "!=" operators!!! This operators compare only VALUE, not a TYPE
// let myString = "0";
// let myNumber = 0;
// let myBoolean = false;

// // Types of the values may be different
// console.log(myString == myNumber); // true
// console.log(myNumber == myBoolean); // true
// console.log(myString == myBoolean); // true

// // // TYPE and VALUE are compared using STRICT EQUALITY operator
// console.log(myString === myNumber); // false
// console.log(myNumber === myBoolean); // false
// console.log(myString === myBoolean); // false

// // // How you SHOULD compare variables of different types
// console.log(Number(myString) === myNumber); // true
// console.log(+myString === myNumber); // true

// // // Inequality operator
// console.log(myString != myNumber); // false
// console.log(myString !== myNumber); // true

// console.log("____");

// console.log(null == undefined); // true

// console.log("____");

// // left-to-right 
// console.log(null === undefined); // false ... but ...
// console.log(0 === "" === null === undefined === false); // true
// // Explanation: 
// // 1) 0 === "" -> false
// // 2) "" === null -> false
// // 3) null === undefined -> false
// // 4) undefined === false -> true !!!!





// /**
//  * SECTION 3
//  * 
//  * Logical operators
//  */
// // OR operator || is binary operator
// // 1) takes first operant and converts to the Boolean
// // 2) evaluates operant. if true -> stops, if false -> moves to the next operant and evaluates it
console.log(true || false); // true
console.log(false || true); // true

console.log("abc" || ""); // abc
console.log("" || "abc"); // abc
console.log("" || ""); // ""

// //  Falsy values - after conversion to boolean type will return false
console.log("" || 0 || null || undefined || NaN || false);

let city; // when we declare a variable, but not assign a value, the value will be undefined
const defaultCity = "New York";

let myCity = city || defaultCity; // undefined OR New York returns New York
console.log(myCity);

console.log("___");

//log function always return undefined. 
let myOtherCity = city || console.log("Fill in city please") || defaultCity;
console.log(myOtherCity);


// // When OR operator finds FIRST TRUESY value it will STOP evaluation -> SHORT-CIRCUIT EVALUATION
city = "Los Angeles";

console.log("___");

myCity = city || defaultCity;
console.log(myCity); // Los Angeles

console.log("___");






// // AND operator &&
// console.log(true && false); // false
// console.log(false && true); // false

// // AND returns value of the first "falsy" operand
// console.log("abc" && 10 && false && "" && "abcd"); // false
// console.log("abc" && 10 && NaN && "" && "abcd"); // NaN
// console.log("abc" && 10 && "" && "abcd"); // ""

// // All operands are "truthy"
// console.log("abc" && 10 && true && 123 && "Hello World"); // "Hello World"

// console.log("___");

// // NOT operator !
// console.log(!"abc"); // false
// console.log(!""); // true
// console.log(!0); // true

// let myVariable;
// myVariable = undefined;
// console.log(!myVariable); // true

// myVariable = "Bogdan";
// console.log(!myVariable); // false

// // Quick truthy/falsy check
// myVariable = null;
// console.log(!!myVariable); // false
// myVariable = 10;
// console.log(!!myVariable); // true


// /**
//  * SECTION 4
//  * 
//  * Operators Precedence
//  */
// console.log(2 + 4 * 10); // 42 FIRST - "*", SECOND - "+"
// console.log((2 + 4) * 10); // 60 FIRST - "()", SECOND - "+", THIRD - "*"

// let a;
// a = 1;

// a = a + 5; // FIRST - "+", SECOND - "="

// console.log(a); // 6

// /**
//  * SECTION 5
//  * 
//  * Operators Associativity
//  */
// let a, b;
// b = 3;

// a = b = 5; // right-to-left
// console.log(a, b);

// console.log(4 + 5 + 6); // 15 - left-to-right
// console.log(6 + 4 + 5); // 15 - left-to-right

// console.log(5 * 10 / 2); // 25 - left-to-right
// console.log(5 * 10 / 2 / 5); // 5 - left-to-right