/**
 * JS Operators
 * -- enables us to perform various actions, calculations and comparisons
 
 */

/**
  Arithmetic Operator
    ( + ), ( - ), ( * ), ( / )
 */

console.log(' -- Arithmetic Operators -- ');


let num1 = 21;
let num2 = 10;

// Addition --> Arithmetic Expression example
let sum = num1 + num2;
console.log('Sum is: ', sum);

//Subtraction
let diff = num1 - num2;
console.log('Difference is: ', diff);

//Multiplication
let product = num1 * num2;
console.log('Product is: ', product);

// Division
let quotient = num1 / num2;
console.log('Quotient is: ', quotient);

//Modulo
let mod = num1 % num2;
console.log( 'Remainder is: ', mod);

//Exponent
let exp = 5 ** 5;
console.log('Exponent: ', exp); //5^5 = 3125

/**
  ASSIGNMENT OPERATORS
  ( = ), ( += ), ( -= ), ( *= ), (/* ) 
 */

  //Equals [ = ]
  let equals = 'this value';
  console.log(equals);

  let a = 5;
  // Addition Assignment
  a += 5; // a = a +5 --> a = 5 + 5 --> a = 10
  console.log(a); // 10

  //Subtraction Assignment ( -= )
  a -= 5; //present value of a =10, so: a = 10 - 5 --> a = 5
  console.log(a);

  //Multiplication Assignment ( += )
a *= 5;
console.log(a);

  // Division Assignment ( += )
  a /= 5;
  console.log(a);

  /**
        Comparison Operators - compares values and return boolean values
            Greater than ( > )
            Less than ( < )
            Greater than or equal to ( >= )
            Lesser than or equal to ( <= )
            Equal to ( == ) --> loose equality (same value regardless of data type)
            Strict Equal ( === )
            Not Equal to (!= )
        

        */

console.log( " -- Comparison Operators -- ");

console.log( 9 < 10); //t
console.log( 10 > 20 ); // f
console.log( 15 <= 30 ); // t
console.log( 15 >= 30); // f
console.log( '5' == 5); // t
console.log ('5' === 5); // string '5' and number 5 --> false
console.log ( 9 != 10 );


/**
  Logical Operators
    --combine boolean values and logical operators to evaluate condition
 
    AND [&&] - returns true if both conditions are true
    OR [ || ] - atleast one of the conditions either left / right is true.
    NOT [ ! ]

    */

console.log( " -- Logical Operators -- ");

//And [ && ]
console.log('AND [ &&]: ', true && true);

// OR [ || ]
console.log( 'OR [||]: ', true || false);

//NOT [ ! ]
console.log('NOT [!]: ', !true) ;

/**
    Unary Operator
        increment ( ++ )
        decrement ( -- )
 */

        console.log( " -- Unary Operator -- ")
        let x = 10;

        x++; // x + 1 --> 10 + 1 --> x = 11
        console.log(x)

        x--; // x - 1 --> 11 - 1 --> x = 10
        console.log(x);

        /**
          Ternary Operator
            -- takes 3 operans, and returns a value based o a condition
            -- shorthand version of if-else statement
            syntax - condition ? expressionIfTrue : expressionIfFalse
         */

        console.log( " -- Ternary Operator -- ");

        let age = 20;

        let message = (age >= 20) ? 'You are of legal age' : ' You are a minor';
        console.log(message);

        /**
          Type of Operator
         */

        console.log(typeof(age));
        console.log(typeof(message));