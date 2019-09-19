// /**
//  * CHALLENGE 1
//  * 
//  * Add elements at the beginning of the Array
//  * First add string "Hello"
//  * Second add number 100
//  */

// const briefcase = [true, 3];
// briefcase.unshift("Lock");
// briefcase.unshift(234);
// console.log(briefcase);
// // const myArray = [true, null];

// // console.log(myArray); // [100, "Hello", true, null]

// // SOLUTION

// const myArray = [true, null];

// myArray.unshift("Hello");
// console.log(myArray);

// myArray.unshift(100);

// console.log(myArray); // [100, "Hello", true, null]

// /**
//  * CHALLENGE 2
//  * 
//  * Add element at the specific index.
//  * Element "abc" with index 10.
//  * Log to the console Array and explain results.
//  * What is the length of the final Array?
//  */

// const notes = [1, 1];
// console.log(notes); // (2) [1, 1]

// notes[10] = "sehr gut";
// console.log(notes); // (11) [1, 1, empty × 8, "sehr gut"]
// console.log(notes.length); // 11

// // const myArray = [1, 2];

// // SOLUTION
// const myArray = [1, 2];
// console.log(myArray.length); // 2

// myArray[10] = "abc";

// console.log(myArray); 
// // [1, 2, empty × 8, "abc"]
// // Length is 11
// console.log(myArray.length); // 11


// /**
//  * CHALLENGE 3
//  * 
//  * Array of objects.
//  * 
//  * Create Array with 3 objects.
//  * Each object will have two properties - carBrand, price.
//  * Add one more object to the Array
//  */

// const shoes = [
//     {
//         shoesBrand: "Remonte",
//         price: 110
//     },
//     {
//         shoesBrand: "Gabor",
//         price: 120
//     },
//     {
//         shoesBrand: "Puma",
//         price: 100
//     }
// ]

// console.log(shoes); //  [{…}, {…}, {…}]
//                     // 0: {shoesBrand: "Remonte", price: 110}
//                     // 1: {shoesBrand: "Gabor", price: 120}
//                     // 2: {shoesBrand: "Puma", price: 100}
//                     // 3: {shoesBrand: "Rieker", price: 50}
//                     // length: 4
//                     // __proto__: Array(0)
// const newShoes = {
//     shoesBrand: "Rieker",
//     price: 50
// };
// shoes.push(newShoes);
// console.log(shoes); // (4) [{…}, {…}, {…}, {…}]
                    // 0: {shoesBrand: "Remonte", price: 110}
                    // 1: {shoesBrand: "Gabor", price: 120}
                    // 2: {shoesBrand: "Puma", price: 100}
                    // 3: {shoesBrand: "Rieker", price: 50}
                    // length: 4
                    // __proto__: Array(0)




// const arrayOfCars = [
//   {
//     carBrand: "Toyota",
//     price: 12000
//   },
//   {
//     carBrand: "Tesla",
//     price: 30000
//   },
//   {
//     carBrand: "BMW",
//     price: 25000
//   }
// ];

// console.log(arrayOfCars);

// const newCar = {
//   carBrand: "Honda",
//   price: 15000
// };

// arrayOfCars.push(newCar);

// console.log(arrayOfCars); // Array with 4 objects
