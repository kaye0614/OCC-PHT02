/**
  JS Expressions
    -- applications of JS Operators
 */

console.log( "-- Arithmetic Expressions -- ")

let result = 5 + 3 * 2; //PEMDAS
console.log(result); // 11

console.log( "-- String Expressions -- ")

// [ + ] --> String concatenation operator

console.log( 'Hello' , 'World!');

console.log( 'Hi! This is' + 'Alice');

console.log(" Hello" + ' ' + "Alice!");

let str = " Hello" + ' ' + "Alice";
 console.log(str);

 console.log(" -- Logical Expression -- ")

 let a = 7;
 let b = 5;

 console.log((a> 5 )&& (b > 10)); // (7 > 5) && ( 5 > 10) --> true and false = false

 let isSunny = true;
 let isWarm = false; // is && --> false

 let picnicPlan = isSunny || isWarm;
 console.log(picnicPlan);

 // ===
 console.log( " -- Assignment Expression -- ");
 // Arithmentic + Setting a variable's value

 let x = 10;
 let y = 5;

 x = x +  y; // updates the value of x by adding y
 console.log(x);

 // ====
 console.log( " -- Function Call Expression -- ");

 //Function Definition - greet name
 function greet(name) {
    return 'Hi! I am' + name + "!";

 }
// Function call
 let intro = greet('Joseph');
 console.log(intro);

 