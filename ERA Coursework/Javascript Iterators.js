/*
let numbers = [1, 2, 5, 6, 20, 25, 33, 660];

numbers.forEach(x => {
    console.log(x);
});

let square = x => (x ** 2); 
let squareNumbers = numbers.map(square); 

console.log(squareNumbers);

let isEven = x => x % 2 === 0;
let evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

let sum = (acc, x) => acc + x; 
let totalNumbers = numbers.reduce(sum, 0);

console.log(totalNumbers);

*/


let person1 = {
property1: "Ricky Spanish",
property2: 45,
};

let iterator = person[Symbol.iterator];
let current = iterator.next();
while(!current.done) {
    console.log(current.value);
    current = iterator.next();
} 

let person2 = {
    property1: "Cleavland Brown",
    property2: 42,
};

let arrayPersons = [person1, person2];
console.log(arrayPersons);

for(const person1 of arrayPersons) {
    console.log(person1); 
}; 
