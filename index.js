// /**
//  * EXAMPLE 1
//  * 
//  * "if" statement
//  */
let i = 10;

if (i > 0) {
  console.log(i);
}

if (i) {
  console.log(i);
}


// /**
//  * EXAMPLE 2
//  * 
//  * "if else" statement
//  */
const bookstore = ["dvg", "ghj", "yui", "pol", "kol", "hyg","abc"];
if (bookstore.length < 5){
    console.log("Klein, aber sehr gemuetlich!")
}else{
    console.log("Die besten Bücher für jedes Geschmack!")
}


const myArray = [4, true, "abc", null, 5, 10];

if (myArray.length > 5) {
  console.log("Array is large");
} else {
  console.log("Array is small");
}

// /**
//  * EXAMPLE 3
//  * 
//  * Chaining "if" and "if else" statements
//  */
let obst = "Salami";

if (obst === "Apfel") {
  console.log("Ich liebe Apfelkuchen");
} else if (obst === "Kirschen") {
  console.log("Ich liebe Schwarzwaelder Kirschtorte");
} else if (obst === "Aprikose") {
  console.log("Ich liebe Aprikosenkuchen");
} else {
  console.log("Pizza ist die beste Torte");
}


let color = "yellow";

if (color === "green") {
  console.log("It is green color");
} else if (color === "yellow") {
  console.log("It is yellow color");
} else if (color === "red") {
  console.log("It is red color");
} else {
  console.log("Color is unknown");
}



// /**
//  * EXAMPLE 4
//  * 
//  * "switch" statement
//  */
// let color = "green";

// switch (color) {
//   case "green": 
//     console.log("It is green color");
//     break;
//   case "yellow":
//     console.log("It is yellow color");
//     break;
//   case "red":
//     console.log("It is red color");
//     break;
//   default:
//     console.log("Color is unknown");
// }

// /**
//  * EXAMPLE 5
//  * 
//  * Ternary operator
//  */

let age = 21
voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);


// -----------------
function getFee(isMember) {
    return (isMember ? "$2.00" : "$10.00");
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(1));
  // expected output: "$2.00"


  //-------------------
let s = 10;
let j;

j = s < 100 ? s : 0;

s > 10 && j
  ? console.log("Condition is truthy")
  : console.log("Condition is falsy");

console.log(j);