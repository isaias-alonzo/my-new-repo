// Explain the difference between Object.keys() , Object.values() ,
// and Object.entries() . Provide examples.
/* Object.keys() returns an array with the keys of an object
Object.values() returns an array with the values of an object
Object.entries() returns an array of the keys and values of an object

// How do for...of and for...in loops differ in JavaScript? Provide
// scenarios where each is preferable
/* for of loops in JS iterate over the elements of an array usually and 
for in loops allow you to iterate over keys of an object. 
*/

// How do you use the length property of an array to iterate over it
// dynamically
/* using the .length property of an array allows you to use the amount of elements of an array as a backstop for your executable code in a loop. For that given length your code will continue.
*/

// Write a for loop that iterates backward through an array and
// prints its elements to the console.

let grades = [59, 55, 69, 77, 82, 94]
for(let i = grades.length - 1; i >= 0; i--){
    console.log(grades[i])
}

// Which loops in JavaScript are best suited for iterating over objects,
// and why?
/* 
for in loops more easily allow you to iterate over keys in an object. 

*/

// Write a function that demonstrates the difference between
// function declarations and function expressions in JavaScript.


console.log(sum(10, 22))
function sum(a, b){
    return a + b;
}


console.log(total(5, 4));
//Error: cannot access 'total' before initialization 
const total = (x, y) => {
    console.log(x + y);
}
/* Key points about function declarations:
Syntax: function functionName(parameters) { ... } 
Hoisting: Function declarations are hoisted, meaning they are accessible throughout their scope even before the line where they are defined. 
Naming: Must have a name 
Usage: Typically used when you need a function to be accessible globally or within a specific scope from the beginning of your code. 
Key points about function expressions:
Syntax:
const variableName = function(parameters) { ... } or (function(parameters) { ... })() 
Hoisting:
Function expressions are not hoisted, meaning they are only accessible after their definition 
Naming:
Can be named or anonymous (no name) 
Usage:
Useful when you need to pass a function as an argument to another function, create immediately invoked function expressions (IIFEs), or when you want to limit the scope of a function. */

// Create an object named people where each key is a person's name and 
// the value is an array of their favorite foods. 
//Use for...in to iterate over the object keys (names).
// Inside that loop, use for...of to print each person’s favorite foods.
let people = {
    Lamar: ["Clam Chowder", "pizza"],
    Kyle: ["Andouille Pasta", "Cheez-Itz"],
    Steve:  ["Pizza", "Broccoli Beef"],
    Kenny:  ["Chilli", "Slaw"]
}

try{

for(let person in people){
    console.log('\n' + person);
    for(let favorite of people[person]){
        console.log(favorite);
    }
   
}
} catch(error){
    console.log("You have a " + error)
}
// '\n' is an escape sequence which means a line break for a string
