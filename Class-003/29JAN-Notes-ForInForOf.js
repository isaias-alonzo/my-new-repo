/* loops 
for of loops
let array = [1, 2, 3, 4, 100, 5]
fpr(let variable of array){
    console.log(variable)
};



*/ 
let fruits = ["Apple", "Banana", "Cherry"]

for(let fruit of fruits){
    console.log(fruit)
}

/* for in loop 

used to iterate over objects 

for(let key in object)

not usually used with arrays
best used in object to get object properties

*/
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

//to get just the keys of the object
/*for(let key in person){
    console.log(key)
};
*/

// to get first value
for(let key in person){
    console.log(key + ": " + person[key])
};
//for of loop
let colors = ["Red", "Green", "Blue"]
for(let color of colors){
    console.log(color)
}


/*for in loop
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};
for(let key in car){
    console.log(key + ": " + car[key])
}
*/
//get your keys in an array format
console.log(Object.keys(car));
//use a comma to separate requests for a console.log(thing1, thing2)
//find your values in an array format
console.log(Object.values(car))

//each key and its value is referenced in index format
console.log(Object.entries(car))

let newObj = Object.entries(car)
console.log(newObj)

// used to revert back to an object 
let otherObj = Object.fromEntries(newObj); 
console.log(otherObj)

/*
*
Create an object named car with properties: brand, model, year, and color.
Use for...in to print all the keys.
Use Object.keys() with a for loop to print all the keys and their values.
 
*/
 let car = {
    brand: "Volkswagen",
    model: "Taos",
    year: 2024,
    color: "Slate gray"
 }
 
 for(let key in car){
    console.log(key)
};

let newCar = Object.entries(car);
for(let [key, value] of newCar){
    console.log([key + ": " + value])
};
let newerCar = Object.keys(car)
for(let i = 0; i < newerCar.length; i++){
    console.log(newerCar[i] + ": " + car[newerCar[i]])
}



 
/*
Create an array of numbers and create a seperate variable that holds a string value
Use for....of to print the indices of the array and the letters of the string
 
*/
let numericValues = [45, 9, 223, 556, 3030];
let jets = "Airbus";
for(let numericValue of numericValues){
    console.log(numericValue)
}
for(let a of jets){
    console.log(a)
}
 
/*
Look up these methods:
map()
filter()
forEach()
reduce()
 
Can these methods be used to iterate over these variables?  If so how?
 
Write the syntax for each of these methods
 array.map(function) then you can place this expression within a variable to get a new array that has been iterated

 array.filer(function) this will return a new array that has been filtered/iterated as per the function  

 array.forEach(function) calls a function for each element

 array.reduce() combines all numbers in an array
 
*/
