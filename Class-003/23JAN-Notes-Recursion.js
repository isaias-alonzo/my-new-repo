//recursion - when a function calls back on itself
/*
function factorial (n) {
    let result = 1;
    while(n > 1) {
        result = result * n;
        console.log(result);
        n--;
    }
    return result
}

console.log(factorial(6)); 
*Should be 720
*/

// or write it this way:

function factorial (n){
    return n > 1 ? n * factorial(n - 1): 1; 
} 
console.log(factorial(6));

// *Should be 720

//function expression
let myAdd = function add(a, b) {
    return a + b;
}

console.log(myAdd(10,20));


// Regular functions are hoisted
console.log(add(234, 10)); 
function add(a, b) {
    return a + b;
}
// the above isnt an issue, JS will call the function anyway, regardless of where you call the function (top or bottom, doesn't matter)
const multi = (a , b) => {
    return a * b; 
}

/* anonymous function expression NOT HOISTED
const fact = function (n) {
    return n > 1 ? n * factorial(n - 1): 1; 
}
    console.log(fact(6));
*/

//arrow function - shorter form of function expressions - NOT HOISTED
let newAdd = (a,b) => {
    return a + b;
}
//Synchronous callbacks -> instructions that are executed in the order in which they are placed
let inner = function(){
    console.log('Inner 1')
};
let outer = function(callback){
    console.log('Outer 1');
    callback();
    console.log('Outer 2');
}

console.log('test 1');
outer(inner)
console.log('test 2');


const multiply = (x,y) => {
    return x * y;
}
/* const multiply = (x,y) => return x * y; 
*/ 
string = "hell"
const isLongString = (string) => {
    if(string.length >= 5) {
        return true;
    } else if(string.length < 5) {
        return false;
    }
}
console.log(isLongString(string));
/* const isLongString = string => string.length > 5;
console.log(isLongString("Hello"));
*/ 
let minutes = 60;
const minutesToSeconds = (minutes) => {
    return minutes * 60 + " seconds";
}
console.log(minutesToSeconds(minutes));

/*
function filterNumbers(array, callback) {
    return array.filter(num => callback(num));
}

const isPositive = num => num > 0;
const numbers = [1, 3, 78, 25, 33];
const positiveNumbers = filterNumbers(numbers, isPositive);
console.log(positiveNumbers);
*/
//write a function that takes an array and a callback. Use the callback to filter only positive numbers. 
function filterNumbers(array, callback) {
    return array.filter(callback)
}

const isPositive = num => num > 0;

const numbers = [1, -3, 78, -25, 33];
console.log(numbers.filter(isPositive));

function processArray(array, callback){
    return callback(array);

}
const doubleNumbers = array => array.map(num => num * 2);
const isOdd = array => array.filter(num => num % 2 !== 0);
//const sumArray 