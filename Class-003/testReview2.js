// How do you efficiently access the last element of an array without knowing its length?
/* You can reference [array.length - 1] to find the last element in the array. 
// What does accessing a non-existent property of an object return?
/* Undefined*/
// How does the map() function transform arrays in JavaScript?
/* The map function transforms each element in the original array according to a set function into a new array and does not modify the original array.*/ 

// What is the purpose of the reduce() method in JavaScript arrays, and how does it differ from map() ?
/* The reduce method returns the accumulated result of all elements in the array. */ 

// What are arrow functions, and how do they differ from regular function expressions?
/* arrow functions are shorter in syntax and are not hoisted meaning it must be called after it is defined. */

// What is the difference between type coercion and type conversion in JavaScript? Provide examples of each.
/* type coercion is an automatic conversion of a value from one value type to another, like when you have a number in a string and attempt to add it to a number, JavaScript will try to make them compatible. Type conversion is when the programmer uses JavaScript to convert one data type to another via function or method. */ 
//Write code that does a simple increment and decrement to a number, and how would you do it so it increments/devcrements immediately?
const increment = (n) => {
    if(n = n + 1){
        return n++;
    }

}
console.log(increment(20));

const decrease = (n) => {
    if(n = n - 1){
        return n--; 
    }
}
console.log(decrease(33));

let a = 21;
let b = ++a;

console.log(b);


// Write some JavaScript code that uses higher-order functions like filter() , map() , and reduce().
//map() below
const benchPress = [135, 225, 185, 315, 265, 95];

const bigBench = benchPress.map(egoLift);
function egoLift(num) {
    return num + 90; 
};
console.log(bigBench);

//filter()
const eliteLifter = bigBench.filter(howStrong);
function howStrong(num) {
    return num >= 315;
};

console.log(eliteLifter);

//reduce()
console.log(bigBench.reduce((sum, val) => sum + val, 0));

// How does JavaScript handle recursion when calculating factorials? Write an example program
function factorial (n){
    return n > 1 ? n * factorial(n - 1): 1; 
} 
console.log(factorial(20));

function pyramid (x){
    return x > 1 ? x + pyramid(x - 1): 1;
}
console.log(pyramid(20));

