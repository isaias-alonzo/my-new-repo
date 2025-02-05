//ternary operator is just shorthand for if... else


//syntax
//condition ? expressionIfTrue : expressionIfFalse;

let age = 18; 

let message = age >= 18 ? "You can vote" : "You can't vote, bih"; 
console.log(message);


//multiple conditions

let score = 85; 

let grade = score >= 90 ? "A" : score >= 80 ? "B": "C"; 

console.log(grade); 


//switch statement 
/*
switch(expression){
    case first_match:
        your code
        break;
    case second_match:
        your code
        break;
    default:
        code

} */

let door = 'c';

let win = false;

switch(door){
    case'a':
    console.log("You won!")
    break;
    case 'b':
    console.log("You won!")
    break;
    case 'c':
    console.log("You won!")
    win = true
    break;
    default:
    console.log("Invalid entry, type a, b, or c.")
}

if(win){
    console.log("Winner Winner Chicken Dinner")
}

// program that takes string for red yellow green and outputs appropriate action stp caution or go 
let light = 'Red';

switch(light){
    case 'Red':
        console.log("STOP")
        break;
    case 'Yellow':
        console.log("CAUTION")
        break;
    case 'Green':
        console.log("GO")
        break;
    default: 
        console.log("Whatever, do what you want")
}
// program that determines season based on month provided as input using switch statement
/* DEC-FEB winter
MAR-MAY spring
JUN-AUG summer
SEP-NOV Fall
 */

let month = 'January';

switch(month){
    case 'December': 
    case 'January': 
    case 'February': 
        season = 'Winter'
        console.log(`It's ${season}`);
        break;
    case 'March': 
    case 'April': 
    case 'May': 
        season = 'Spring'
        console.log(`It's ${season}`);
        break;
    case 'June': 
    case 'July': 
    case 'August':
        season = 'Summer'
        console.log(`It's ${season}`);
        break;
    case 'September': 
    case 'October': 
    case 'November': 
        season = 'Fall'
    console.log(`It's ${season}`);
        break;
    default: console.log(`Use a Gregorian calendar month, bitch.`);
}
//program that determines id a number is even or odd using ternary operator 

let num = 93;

let evenNum = (num % 2) == 0 ? `${num} is even` : `${num} is odd`;

console.log(evenNum);

/* function syntax
function functionName() {
    code;
} */

function greet() {
    console.log("Hello");
};

greet();

