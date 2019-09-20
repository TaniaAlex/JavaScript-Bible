/**
 * JS-BASICS/CORE/CHALLENGES/06-loops-and-conditions
 * 
 */
// /**
//  * TASK 1
//  * 
//  * Loop through the object and if property name(key) is either "key1" or "key3" log to the console property value
//  */
// const myObject = {
//   key1: true,
//   key5: 10,
//   key3: "abc",
//   key4: null,
//   key10: NaN
// };

// // ANSWER
// for (key in myObject){
//     if(key === "key1" || key === "key3"){
//         console.log(myObject[key])
//     }
// }


// /**
//  * TASK 2
//  * 
//  * Generate new 4-digit random number.
//  * Range for the random number is 1000-9999.
//  * 
//  * Ensure that this new random number doesn't match any of the numbers in the myNumbers array.
//  * If it matches you need to generate new 4-digit number.
//  * If there is no match(new number is unique) then add it to the myNumbers array.
//  */
const MIN = 1000;
const MAX = 9999;

const myNumbers = [
  2355,
  7235,
  8135,
  1762,
  2361,
  8351
];

// // SOLUTION 1 (meine Loesung)

// // Generate new 4-digit random number
let valRandomNumber = Math.floor(999 + Math.random() * 9000);
// console.log(valRandomNumber);

// // Check if it matches any number in the array
let isNotUniqueNumber = myNumbers.includes(valRandomNumber); // returns boolean



// // Add new unique number to the array
 let newUniqueNumber = isNotUniqueNumber 
    ? console.log("Is not Unique! Try again")
    : myNumbers.push(valRandomNumber); 
    console.log(`Unique Number ${valRandomNumber} is found and added to your array ${myNumbers}!`);

    console.log(myNumbers);


// // use if else statement to check unique number
//  if(isNotUniqueNumber !== myNumbers){
//      myNumbers.push(valRandomNumber);
//      console.log(`Unique Number ${valRandomNumber} is found and added to your array!`);
//  }else{
//     console.log(`The Number ${valRandomNumber} is not unique!`)
//  }
// console.log(myNumbers);


// // SOLUTION 2 (by tutor instraction)

// let newRandomNumber;

// function getRandomIntInclusive(min, max) {
//     // min = Math.ceil(min); // rounds a number up to the next largest whole number or integer.
//     // max = Math.floor(max); // returns the largest integer less than or equal to a given number.
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and the minimum are inclusive 
//   }
//   console.log(getRandomIntInclusive(MIN, MAX)) ;

//   //we need to generate random number at least ones, so we use do{}while() loop


//   function isNotUnique(newRandomNumber){
//     // compare num with numbers in myNumbers array
//     for(let number of myNumbers){
//         if(number === newRandomNumber){
//             console.log("Number " + newRandomNumber + " is not unique!");
//             return true;
//         }
//     }
//   }

// do {
//     newRandomNumber = getRandomIntInclusive(MIN, MAX);

// } while (isNotUnique(newRandomNumber));

// myNumbers.push(newRandomNumber);
// console.log(myNumbers);



// // SOLUTION 2 (TUTOR ANSWER)

// let newRandomNumber;
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
// }
// console.log(getRandomInt(MIN, MAX)) ;
// function isNotUnique(newRandomNum) {
//   // compare num with numbers in the myNumbers array
//   for (let number of myNumbers) {
//     if (number === newRandomNum) {
//       console.log("Number " + newRandomNum + " is not unique!");
//       return true;
//     }
//   }
// }

// do {
//   newRandomNumber = getRandomInt(MIN, MAX);
// } while (isNotUnique(newRandomNumber));

// myNumbers.push(newRandomNumber);

// console.log(myNumbers);


// /**
//  * TASK 3
//  * 
//  * For in loop. Make "for in" loop iterate only over own properties of the myObject
//  */
const myObject = {
  name: "Mike",
  age: 30,
  city: "London"
};

Object.prototype.country = "England";

// Adjust "for in" loop, so it will not log to the console any inherited property
for (let key in myObject) {
    // console.log(myObject[key]);
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key]);
  }
}

// /**
//  * TASK 4
//  * 
//  * Rewrite "if...else" statement with ternary operator
//  */
// function emptyArray(inputArray) {
//   if (inputArray.length > 0) {
//     return "Array is not empty";
//   } else {
//     return "Array is empty";
//   }
// }

// console.log(emptyArray([1, 3]));
// console.log(emptyArray([]));


// //ANSWER
// function emptyArray(inputArray) {
//   return inputArray.length > 0
//     ? "Array is not empty"
//     : "Array is empty";
// }

// console.log(emptyArray([1, 3]));
// console.log(emptyArray([]));
