/************************CORE CONCEPT PRACTICE*************************************
FOCUS: VARIABLES, CONDITIOONALS, LOOPS, FUNCTIONS, ARRAYS, AND OBJECTS

/*
Declare a let variable called greeting and assign the value "Good Morning".
Create a const variable named hour with a value of 9.
Reassign greeting to "Good Afternoon" if the hour is greater than or equal to 12.*/
let greeting = "Good Morning";
const hour = 9;
if(hour >= 12){
    greeting = "Good Afternoon"
} else if( hour < 12){
    greeting = "Good Morning"
}


/*
Write a program that checks a number stored in the variable temperature.
-If the number is below 0, print "It's freezing!".
-If it’s between 0 and 30, print "It's cold.".
-If it’s above 30, print "It's warm."*/
let temperature; 
if(temperature < 0){
    console.log("It's freezing");
} else if(temperature >= 0 && temperature < 30){
    console.log("It's cold")
} else if(temperature >= 30){
    console.log("It's warm")
}


/*
Create a for loop that prints the numbers 1 to 10.
Add a while loop that sums numbers from 1 to 5 and prints the result.*/
for(let i = 1; i <= 10; i++){
    console.log(i)
}

let smallSum = 0;
let a =1;
do{ 
    smallSum += a; 
    a++;

} while(a <= 5)
console.log(smallSum)

/*
Write a function named multiply that takes two parameters and returns their product.
Call the function with values 4 and 5 and print the result.
Try changing the inputs to negative numbers.*/
function multiply(a, b) {
    return a * b; 
};
console.log(multiply(4, 5))
console.log(multiply(-4, -5))

/*
Create an array of numbers: [3, 6, 9, 12].
Use a loop to print each number multiplied by 2.
Create an object named car with properties make, model, and year. Print the object.*/

const numbers = [3, 6, 9, 12]

    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i] * 2);
    }
    
/*
Declare a let variable isLoggedIn and set it to false.
Change it to true if the username variable equals "admin".*/
let isLoggedIn = false;
let username; 
if(username = "admin"){
    isLoggedIn = true; 
} else{
    isLoggedIn = false; 
}


/*
Create a variable score.
If score is 90 or above, print "A".
If between 80 and 89, print "B".
If between 70 and 79, print "C".
Otherwise, print "F".*/
let score = 89; 
switch(score){
    case(score >= 90):
    console.log("A");
    break;
    case(score >= 80 && score < 90):
    console.log("B");
    break;
    case(score >= 70 && score < 80):
    console.log("C");
    break;
    default:
    console.log("F");
    break;
}


/*
Write a for loop to print only even numbers from 1 to 20.
Create a while loop that multiplies numbers from 1 to 5 and prints the result.*/
for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

let nummy = 1;
let multiplied = 0;
do{

}

/*
Write a function greetUser that takes a name and prints "Hello, [name]!".
Call it with different names like "Alice" and "Bob".*/
function greetUser(str) {
    console.log(`Hello, ${str}!`)
}
greetUser("Isaias")
greetUser("Alice")
greetUser("Bob")
/*
Create an array of strings: ["apple", "banana", "cherry"].
Loop through and print each item in uppercase. -> there is a method for this
Create an object student with name, age, and grade properties. Print each property.*/
let fruits = ["apple", "banana", "cherry"];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits.toUpperCase(i))
}


/*
Declare a variable totalAmount and set it to 100.
Create a constant discountRate set to 0.2.
Calculate the final price after applying the discount and store it in a variable finalPrice.*/
let totalAmount = 100; 
const discountRate = 0.2; 
let finalPrice = totalAmount -= (totalAmount * discountRate);
console.log(finalPrice)


/*
Create a program that checks a number stored in a variable age:
-If the age is less than 18, print "You are a minor.".
-If it’s between 18 and 64, print "You are an adult."
-Otherwise, print "You are a senior citizen."*/
let age = 18; 
if(age < 18){
    console.log("You're a minor")
} else if(age >= 18 && age <= 64){
    console.log("You are an adult")
} else{
    console.log("You are a senior citizen")
}


/*
Create a for loop to print the numbers from 10 down to 1 in reverse.
Use a while loop to print the first 5 multiples of 3.*/
for(let i = 10; i >= 1; i--){
    console.log(i)
}
let x = 1;

while(x <= 5){
    console.log(x * 3)
    x++;
}

/*
Write a function isEven that takes a number and returns true if the number is even, otherwise false. Test the function with values like 10, 15, and 22.*/
let y = 22;
function isEven(y) {
    if( y % 2 === 0){
        return true;
    } else{
        return false; 
    }
}
console.log(isEven(y))

/*
Create an array of 5 numbers: [10, 20, 30, 40, 50].
Write a loop to calculate the sum of the numbers.
Create an object book with properties title, author, and pages. Add a new property genre and print the updated object.*/
let listNumbers = [10, 20, 30, 40, 50];
let sum = 0;
for(let i = 0; i < listNumbers.length; i++){
    sum += listNumbers[i];
}
console.log(sum)

/*
Declare variables for firstName and lastName and assign them your name.
Create a fullName variable that combines firstName and lastName.
Print the result using template literals.*/
let firstName = "Isaias";
let lastName = "Alonzo";
let fullName = `${firstName} ` + `${lastName}`;
console.log(fullName)


/*
Declare a variable score and assign it a number between 0 and 100.
Print:
"Pass" if score is 50 or higher.
"Fail" if score is below 50.*/
let score = 69;
if(score >= 50){
    console.log("pass")
} else{
    console.log("fail")
}


/*
Create a for loop that prints the squares of numbers from 1 to 10.
Write a while loop to print numbers from 1 to 5 in reverse.*/
for(let b = 1; b <= 10; b++){
    console.log(b ** 2)
}
let c = 5
while(c >= 1){
    console.log(c);
    c--;
}

/*
Write a function greet that takes a name and a timeOfDay (morning, afternoon, or evening).
Print a greeting like "Good morning, John!".*/
let name = "Timmy";
let timeOfDay = "morning";
let dailyGreeting = (timeOfDay, name) => {
    console.log(`Good ${timeOfDay}, ${name}!`)
}
dailyGreeting(timeOfDay, name)


/*
-Create an array of fruits: ["apple", "orange", "grape", "banana"].
-Use a loop to print only fruits with more than 5 letters.




/*
Declare a variable length set to 10 and a variable width set to 5.
Calculate the area of a rectangle using these variables and print the result.*/



/*
Write a program to check if a number stored in num is divisible by 3, 5, or both:
If divisible by 3, print "Fizz".
If divisible by 5, print "Buzz".
If divisible by both, print "FizzBuzz".
If not divisible by 3 or 5, print the input
If not a number, print 'Not a number'*/
let f;
let b;
let fB;
if(f % 3 === 0){
    console.log("Fizz")
} else if(f % 5 === 0){
    console.log("Buzz")
} else if(f % 5 === 0 && f % 3 === 0){
    console.log("FizzBuzz")
} else if(f % 5 !== 0 && f % 3 !== 0 ){
    console.log(`${f}`)
} else if(f == NaN){
    console.log(`That's not a number bro`)
}


/*
Write a loop to print the factorial of a number (e.g., 5! = 120).
Use a loop to reverse the characters of a string "hello" and print it.*/



/*
Write a function sumArray that takes an array of numbers and returns the sum of all elements.*/
let 
function sumArray(arr) {
    arr.reduce()
}


/*
Create an object pet with properties type, name, and age. Add a method to print a sentence like: "My dog's name is Max, and he is 4 years old."*/




/*

* @param {number[]} nums

* @param {number} target

* @return {number[]}

*/

var twoSum = function(nums, target) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        let complement = target - nums[i];

        if (map.has(complement)) {

            return [map.get(complement), i]; // Return the indices

        }

        map.set(nums[i], i);

    }

    return []; // Return an empty array if no solution is found

};

 
