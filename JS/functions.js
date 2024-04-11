/**
 FUNCTIONS
    -- written to perform a specific task;
    -- can be reused whenever needed

    syntax:
        'function' keyword <function_name> (parameter/s){
            <code block>
        }

        to call a function:
        <function_name> (argument)

 */

function greet(){
    console.log('HelloWorld!')
}

greet();

//function parameters and arguments

function greeting(name){
    console.log('Hi I am ' + name);
}

greeting('Kaye');

//return statement
function add( num1, num2){
    return num1 + num2;
}
let sum = add (3, 5);
console.log(sum);

function fullName(fName, lName){
    console.log('Full Name: ' + fName + ' ' + lName);
}
fullName('Patrick', 'Bensi');