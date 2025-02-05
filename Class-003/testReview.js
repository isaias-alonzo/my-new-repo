// What is the significance of JavaScript in modern web development, 
/*JavaScript handles dynamic movements on the client side of the webpage and works in tandem with HTML (the structure and contents of the webpage) and CSS (the design and styling). */
//List and explain all JavaScript primitive data types, including their typical use cases.
/* "string" used to display information, number (123) used for arithmetic or logical operations, big number (123n) used for large numbers and their arithmetic operations, symbol (Symbol("id")) stored and used within functions and logical operations, null used to show an intentional lack of data, undefined which shows a lack of data, Boolean which is used for mathematic and logical operations. */
//Describe how 'undefined' is different from 'null' in JavaScript, with examples of when each might be encountered
/*Undefined is when a variable in not named or designated yet. Null is an expression that communicates that there is no value in said space. */
//What is the difference between the terms 'undefined' and 'undeclared' in JavaScript?
/* undefined is when a variable is called but not given a value and undeclared is when a variable has not been designated with var, const or let. */
//How does JavaScript differentiate between 'null' and an empty object
/* null is used to communicate an intentional lack of value for a variable. */ 
//What are the limitations of the BigInt data type, and how does it integrate with other number types in JavaScript?
/* BigInt is used to communicate large numeric value and cannot be mixed with normal number values and cannot be used for mathematic expressions with normal numbers. */
//Explain the purpose of the <script> tag  in HTML
/* The script tag is used to embed executable code such as JavaScript. */
//Write a JavaScript statement to display "Hello, how are you?" in the console
/* console.log(""Hello, how are you?""); */
//What are the two types of comments in JavaScript, and how do they impact code readability and execution?
// line comment /* multi-line comment*/ 
//What is the result of '10' - '5' + 5 in JavaScript, and why?
/* The answer is 10 because of concatenation. */ 

/*let unitPrice = 10;

let pieces = prompt("How many pieces do you order?", 0);
if(pieces > 0){
    let total = unitPrice * pieces; 
}
console.log(total); 
// this bitch total is called in the function, NOT in the global scope

let userAge = 23; 
let isFemale = false; 
let points = 703; 
let cartValue = 299; 
let shippingCost = 9.99; 
if(userAge >= 21){
    if(cartValue >= 300 || points >= 500){
        shippingCost = 0;
    }
}

let freeShipping = (userAge, cartValue, points) => {
    if(userAge >= 21 && (cartValue >= 300 || points >= 500)) {
        shippingCost = 0;
    }
}

let number = prompt("Enter a number", 0);
if(number < 10){
    alert(" < 10")
} else if(number < 30){
    alert(" < 30")
} else if(number < 60){
    alert(" < 60")
} else if(number < 90){
    alert(" < 90")
} else if(number < 100){
    alert(" < 100")
} else if(number == 100){
    alert("100")
} else{
    alert("> 100")
};
*/
/* check the price of something and if price is between 50 and 100 give a 50% discount shipping price
if greater than 100, shipping free 
shipping cost = 10 
*/ 

let shippingPrice = 10;
price = 51;

 if(price >= 50 && price <= 100){
    total = price + (shippingPrice / 2);
} else if(price > 100){
    total = price;
} else{
    total = price + shippingPrice;
}; 

console.log(total); 

/*else if(price < 50){
    total = price + shippingPrice; 
} */
/*
const calculatePrice = (price) => {
switch (price) {
    case (price >= 50 && price <= 100): total = price + (shippingPrice / 2)
    break;

    case (price > 100):  total = price
    break; 

    default: total = price + shippingPrice; 
    break; 
}
}
console.log(calculatePrice(price)); */