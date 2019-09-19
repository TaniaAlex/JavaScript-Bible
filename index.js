// /**
//  * EXAMPLE 1
//  * 
//  * Empty Array
//  */
// const myArray = [];
// console.log(myArray);

// Array literal notation
// const mArr1 = [1,2,3];
// console.log(mArr1);

// // creating array using keyword  new
// // property length will be added automatically
// const mArr2 = new Array(1,2,3);
// ar3 = mArr2;
// console.log(mArr2); // [1, 2, 3]
//                     //  0: 1
//                     // 1: 2
//                     // 2: 3
//                     // length: 3 
//                     // __proto__: Array(0)

// console.log(mArr1 === mArr2) // false
// console.log(ar3 === mArr2) // true
// console.log(ar3.length) // 3
// /**
//  * EXAMPLE 2
//  * 
//  * Add elements to the Array
//  */
// const house = [];
// house[0] = "Bedroom";
// console.log(house);
// house[1] = "Bathroom";
// console.log(house);
// house.push("Kitchen"); // Preferable
// console.log(house);
// const myArray = [];
// myArray[0] = "First Element";

// console.log(myArray);

// myArray[1] = "Second Element";

// console.log(myArray);

// myArray.push("Third Element"); // Preferable

// console.log(myArray);

// /**
//  * EXAMPLE 3
//  * 
//  * Modify Elements
//  */

// const kitchen = ["microwave", "table", "fridge", {}, true]
// console.log(kitchen);
// // reassign value of 5th element (index 4)
// kitchen[4] = false;
// console.log(kitchen);
// kitchen[0] = "coffee maker";
// console.log(kitchen);

// // add property to object inside of array
// kitchen[3].sugar = 1; 
// kitchen[3].flour = 2; 
// kitchen[3].cookies = 5; 

// console.log(kitchen);

// const myArray = [3, true, "abc", {}];

// console.log(myArray);

// myArray[1] = "New Value for second element";

// console.log(myArray);

// myArray[0] = null;

// console.log(myArray);

// myArray[3].newProp = 10;

// console.log(myArray);
// console.log(myArray[3].newProp); // 10
// console.log(myArray[3]["newProp"]); // 10

// /**
//  * EXAMPLE 4
//  * 
//  * Square bracket notation
//  */


// const myArray = [1, 2];

// console.log(myArray[0]); // 1
// // If property name in the object is numeric you can't use dot notation
// console.log(myArray.0); // Uncaught SyntaxError: missing ) after argument list


// /**
//  * EXAMPLE 5
//  * 
//  * Delete elements
//  */

const cupbord = [true, "cookies", " cupcakes", 5, null];
console.log(cupbord);

delete cupbord[3]; // the element will be deleted, but the length of the array will ramain the same

console.log(cupbord); // element with index 3 is "empty", but length of the array is still 5 //  [true, "cookies", " cupcakes", empty, null]

console.log(cupbord[3]); // undefined
//
//
// pop() METHOD to delete last element in the array
cupbord.pop();
console.log(cupbord); // [true, "cookies", " cupcakes", empty] // length of the array is 4

cupbord.pop();
console.log(cupbord); // [true, "cookies", " cupcakes"] // length of the array is 3
// 
// 
// 
// shift() METHOD to delete first element of the array
cupbord.shift();
console.log(cupbord); // ["cookies", " cupcakes"]




// const myArray = [true, null, 1, 2, "abc"];
// console.log(myArray);

// delete myArray[2];

// console.log(myArray); // element with index 2 is "empty"

// console.log(myArray[2]); // undefined

// myArray.pop();

// console.log(myArray); // [true, null, empty, 2]

// myArray.pop();

// console.log(myArray); // [true, null, empty]

// myArray.shift();

// console.log(myArray); // [null, empty]

// /**
//  * EXAMPLE 6
//  * 
//  * Compare Arrays
//  */

// const table1 = [12, 34, 56];
// const table2 = [12, 34, 56];
// console.log(table1 === table2);  //false

// const copyOfTable1 = table1;
// console.log(table1 === copyOfTable1); //true

// // to compare content of the array we can use toString() METHOD
// // this METHOD works only if the order of the elements in the array is the same, otherwise it will show false
// console.log(table1.toString() === table2.toString()); //true



// const myArray1 = [1, 3, 2];
// const myArray2 = [1, 2, 3];

// console.log(myArray1 === myArray2); // false

// const copyOfMyArray1 = myArray1;

// console.log(copyOfMyArray1 === myArray1); // true

// console.log(myArray1.toString() === myArray2.toString()); // true