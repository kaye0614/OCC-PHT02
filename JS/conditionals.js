/**
    conditionals Statementd
        --Allow us to make decisions based on certain conditions
 */

console.log( ' === Conditional Statements ===');

console.log(' //== if else');
//if..else --> allows you to create a program that runs only is a specific condition is met
let age = 17; // if 18 and above;then true
if(age >= 18){
    console.log('You can now vote.');
} else {
    console.log("You can't vote")
}

console.log( '//== nested if..else');
let temp = 25; // did not met the first condition w/c is 0 to less 20, so its a warm day

if(temp < 0){
    console.log( "It is freesing.");
} else if (temp >= 0 && temp < 20) {
    console.log( "It is a cool day.");
} else {
    console.log("It is a warm day");
}

console.log('//== Switch..Case');

/**
 Switch..Case --> allows you to contol the execution flow of your code

 3 keywords:
 case: keyword for starting a case blocj
 break : keyword for stopping the switch statement from next code
 default : keyword for running a code when there's no match found
 */

 let day = 'Tuesday'

 switch(day){
    case 'Monday' :
        console.log( 'It is the start of the week');
        break;
    case 'Friday' :
        console.log('It is the end of the week.');
        break;
    default :
        console.log('It is a regular day');
        break;
 }

 let num = 7;
 switch(num){
case 1:
    console.log('This is the number one');
    break;
case 2:
    console.log('This is the number two.');
    break;
case 5:
    console.log( 'This is the number five.');
    break;
default:
    console.log('This is number seven');
 }