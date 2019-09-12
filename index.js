// /**
//  * EXAMPLE 1 - Create object and modify its properties
//  */
let myObject;

myObject = {
  a: 10,
  b: "abc"
};

console.log(myObject);

//Access object`s property using DOT NOTATION 
myObject.a = 15;

console.log(myObject);

// Add new properties to the object
myObject.c = true;

console.log(myObject); //{a: 15, b: "abc", c: true}

// Delete properties of the object with reserved keyword "DELETE" operator
delete myObject.b;

console.log(myObject); //{a: 15, c: true}

console.log(myObject.a); //15

// Access object`s property using BRACKET NOTATION
const myCity = {
    city: "Frankfurt"
};

myCity["popular"] = true;

console.log(myCity); //{city: "Frankfurt", popular: true}

const countryPropertyName = "country";
myCity[countryPropertyName] = "Deutschland";

console.log(myCity) //{city: "Frankfurt", popular: true, country: "Deutschland"}

//Accessing NESTED PROPERTIES ...
const bigCity = {
    city: "New York",
    info: {
        popular: true,
        country: "USA"
    }
};

//... using DOT NOTATION
console.log(bigCity.info.country); //USA

//... using BRACKET NOTATION
delete bigCity.info["popular"];

console.log(bigCity); //city: "New York" info: {country: "USA"}

// /**
//  * CHALLENGE 1
//  * 
//  * Create variable called "myPost".
//  * Initial value should be {}
//  * Add property called "postTitle" and value "Object is reference type"
//  * Add one more property "postLikes" with value 0
//  * Add third property "shared" and set its value to "false"
//  * Increase value of the "postLikes" by 1
//  * Delete property "shared"
//  */



let myPost = {};
myPost.postTitle = "Object is reference type";
myPost.postLikes = 0;
myPost.shared = false;
console.log(myPost); //{postTitle: "Object is reference type", postLikes: 0, shared: false}

// Increase value of the "postLikes" by 1
myPost.postLikes = myPost.postLikes + 1;
console.log(myPost); //{postTitle: "Object is reference type", postLikes: 1, shared: false}
myPost.postLikes = myPost.postLikes + 1;
console.log(myPost); //{postTitle: "Object is reference type", postLikes: 2, shared: false}
myPost.postLikes = myPost.postLikes + 1;
console.log(myPost); //{postTitle: "Object is reference type", postLikes: 3, shared: false}

delete myPost.shared;
console.log(myPost); //{postTitle: "Object is reference type", postLikes: 3}

// /**
//  * EXAMPLE 2
//  * 
//  * Use "const" for object declaration
//  */
const myBlog = {};

myBlog.a = true; // NO ERROR! Variable is not reassigned

console.log(myBlog);

// myBlog = {
//   a: true
// }; // Uncaught TypeError: Assignment to constant variable.

// /**
//  * CHALLENGE 2
//  * 
//  * Create variable "myObject" and add property "a" - 10.
//  * Create another variable "copyOfMyObject" and its value should be myObject.
//  * Add new property "b" with value false to the "copyOfMyObject".
//  * Print to the console "myObject" and "copyOfMyObject" and interpret results.
//  */

let house = {
    miete: 500
}
let house2 = house;
house2.nebenKosten = false;
console.log(house);
console.log(house2);

// let myObject = {
//   a: 10
// };
// let copyOfMyObject = myObject;

// copyOfMyObject.b = false;

// console.log(myObject);
// console.log(copyOfMyObject);

// /**
//  * EXAMPLE 3
//  * 
//  * Bracket notation
//  */
let myBracketNotation = {
  a: true,
  b: null,
  c: 25
};

console.log(myBracketNotation["a"]); // true

// console.log(myBracketNotation[a]); // Uncaught ReferenceError: a is not defined

console.log(myBracketNotation["b"]); // null

const propertyName = "c";

console.log(myBracketNotation[propertyName]); // 25 -> here propertyName is a variable

console.log(myBracketNotation["propertyName"]); // undefined -> this property name is missing in "myBracketNotation"object

myBracketNotation["new" + "Property" + "Name"] = "Value for dynamically computed property name";

console.log(myBracketNotation);

// /**
//  * EXAMPLE 4
//  * 
//  * Missing properties - what is happening if you try to access not existing property
//  */
// const myObject = {
//   a: 3,
//   b: true
// };
// // Code execution is not stopped
// console.log(myObject.c); // undefined

// console.log(myObject.absentProperty); // undefined

// // // Code execution is STOPPED
// // console.log(nonDeclaredVariable); // Uncaught ReferenceError: nonDeclaredVariable is not defined

// // IMPORTANT!!!
// // NEVER ASSIGN "undefined" to any property or variable. Use "null" instead
// myObject.newPropertyWithUndefinedValue = undefined;

// console.log(myObject);
// console.log(myObject.newPropertyWithUndefinedValue);
const myWohnung = {
    miete: 500,
    nKosten: 120
};

// code execution is NOT stopped
console.log(myWohnung.c); //undefined
console.log(myWohnung.hGeld); //undefined -> access not existing property of "myWohnung"

// // code execution is STOPPED
// console.log(nonDeclaredVariable); //Uncaught ReferenceError: nonDeclaredVariable is not defined


// /**
//  * CHALLENGE 3
//  * 
//  * Create object "objectWithNestedObject" with initial value {}.
//  * Add property "nestedObject" with initial value {}.
//  * Add property "a" with value "null" to "nestedObject". Use dot notation
//  * Add property "b" with value "true" to "nestedObject". Use bracket notation. Create new variable with property name
//  */


let houseWithThreeBedrooms = {};

houseWithThreeBedrooms.kitchen = {};

houseWithThreeBedrooms.kitchen.fridge = null;

const newPropertyName = "stove";
houseWithThreeBedrooms.kitchen[newPropertyName] = true;

console.log(houseWithThreeBedrooms);
console.log(houseWithThreeBedrooms.kitchen.stove);
console.log(houseWithThreeBedrooms.kitchen.fridge);


// let objectWithNestedObject = {};
// objectWithNestedObject.nestedObject = {};

// objectWithNestedObject.nestedObject.a = null;

// const newPropertyName = "b";

// objectWithNestedObject.nestedObject[newPropertyName] = true;

// console.log(objectWithNestedObject);