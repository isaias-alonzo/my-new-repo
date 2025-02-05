/* for loop is for executing a loop a specific set number of times
for(let i = 0; i < arr.length; i++){
    initialization; condition; increment
    
    console.log("stuff")
    codeblock
};
initialization - executed only once setting a value
condition - expression to be evaluated as a boolean (true - continue, false - stop)
increment - number of times of advance of the loop

*/

for(let i = 0; i < 10; i++){
    console.log(i);
}

let values = [10, 20, 30, 40, 100];
let sum = 0;
for(let i = 0; i < values.length; i++){
    sum += values[i];
}
console.log(sum);
/* inverse 
for(let i = values.length - 1; i >= 0; i--){
    sum += values[i];
}
console.log(sum); */ 
let foods = ["tacos", "platanos", "rice", "steak", "beans", "ice cream"];
/*for(let i = 0; i < foods.length; i++){
    if(foods[i] === "rice"){
        console.log(foods[i]);
    }

}*/

for(let i = 0; i < foods.length; i++){
    if(foods[i][0] == "r"){
        console.log(foods[i]);
    }

}

let cities = [
    { name: "New York", population: 18 },
    { name: "Cairo", population: 18 },
    { name: "Mumbai", population: 19 },
    { name: "São Paulo", population: 20 },
    { name: "Mexico City", population: 21 },
    { name: "Shanghai", population: 23 },
    { name: "Delhi", population: 25 },
    { name: "Tokyo", population: 37 }
];
 
for(let i = 0; i < cities.length; i++){
    if(cities[i].population >= 20){
        console.log(`${cities[i].name} ${cities[i].population}`)
    } 
}