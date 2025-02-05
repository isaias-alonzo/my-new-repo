//what is the difference between primitives and non-primitive data types in JavaScript?
//primitive data types are simple data types that are simply input and can be immediately ready by the computer. non-primitive data types are such that they must be defined and called forth. Primitive: Stored by value Non-primitive: stored by reference. 
//Name the primitive data types in JavaScript, assign them a variable
let string = "im a string"; 
let number = 128; 
let bigInt = 128n;
let symbol = Symbol("machinations");
let showNull = null;
let booleanMath = (Boolean(21 > 19));
let undefined; 


//What is the difference between an array and an object?
console.log("An array is basically a list of values where an object is an ordered list of set data and datatypes");

//When would you use an object instead of an array?
"I would use an object while inputing information for a specific set of variables where its characteristics are defined and must stay separate."
//What is the difference between the / and % operators? Provide examples.
"The / is the division operator and % is used to divide and produce the remainder only."
//What will this code output, and why?
console.log(5 + "5");
"This code will output 55 because the addition operator is acting like `5` is a string and will process the values left to right and just push them together. Concatenation. Coersion is when JS converts a string to a number."
//What is the difference between var, let, and const?
"var is a less commonly used method to provide an mutable variable into JS and is not common in later versions of JS. let is a method to provide a mutable variable in JS and is currently commonly used. const is a way to provide an immutable, non-changable value in JS.";
//How would you find documentation for a JavaScript method or library?

//Write a scenario where you would use a string in your code.
"I would use a string in my code to provide information to the front end user or in comparison functions to ensure an input is enough to meet certain criteria for executable code"
//How would you check the type of a variable in JavaScript?
let crazyVariable = 1289;
console.log(typeof(crazyVariable));
