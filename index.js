/**
 * JS-BASICS/CORE/CHALLENGE 01: TASK - Function Expressions
 * 
 * Use following built-in functions:
 * setTimeout
 * setInterval
 * clearInterval
 * 
 * You should print to the console ONLY 5 messages with interval 2 seconds:
 * "Here is message number 1"
 * "Here is message number 2"
 * "Here is message number 3"
 * "Here is message number 4"
 * "Here is message number 5"
 */

 /**
  * SOLUTION 1 (my)
  */
let count = 1;
let i = 1;
const printBlogPost = setInterval( function(){
        console.log("Here is blog post number " + i);
        i = i + 1;
        if(count >= 5) clearInterval(printBlogPost);
        count++;
}, 2000);

/**
 * SOLUTION 2 (TUTOR)
 */
let t = 1;
const printMsg = setInterval( function(){
    console.log("Here is message number " + t);
    t = t + 1;
    } ,2000);
setTimeout( function(){ 
    clearInterval(printMsg); 
    }, 10000);