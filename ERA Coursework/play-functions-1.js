const sumOfThree = (x, y, z) => {
    return x + y + z; 
}; 
console.log(sumOfThree(4, 5, 6));

const randomNumbers = [44, 33, 123, 12133, 348483]; 

for(let i = 0; i < randomNumbers.length; i++) {
    console.log(randomNumbers[i]); 
}; 
/*
const customer = [
    {name: "Tommy", order: "White chocolate latte", paymentMethod: "card"}, 
    {name: "Regina", order: "Apple cinnamon espresso", paymentMethod: "app"}, 
    {name: "Ricky", order: "Black coffee", paymentMethod: "card"} 
]; 

const store = (); 

for(let i = 0; i < customer.length; i++) {
    console.log(customer[i]); 
    console.log("Hello" + customer[i] + "!"); 
    store.ringUp(customer[i].name, customer[i].order); 
    let price = store.ringUp(customer[i].name, customer[i].order);
    if(customer[i].order ===  "coffee") {
        console.log("Your order will be ready in 1 minute."); 
    } else if(customer[i].order === "latte") {
        console.log("Your order will be ready in 3 minutes.");
    } else if(customer[i].order === "snack") {
        console.log("Your order will be ready in 4 minutes."); 
    } else {
        console.log("Your order will be ready in a few minutes."); 
    }

let coffee = store.make(customer[i].order); 

    console.log("Thank you for your order!"); 
};
*/

let numArray = [10, 20, 30, 40, 50]; //step 1

let sum = 0; //step 2

//step 3
sum += numArray[0]; 
sum += numArray[1]; 
sum += numArray[2]; 
sum += numArray[3]; 
sum += numArray[4]; 

sum = 0; 
for(let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
    
}; 

console.log(sum); 

//to calculate avg:

console.log("sum:" + sum);
console.log("average:" + (sum / numArray.length)); 

const fruits = ["Banana", "Orange", "Apple", "Mango"];


console.log(fruits.join(" * ")); 

let text = "Hello world!";
console.log(text.substr(1, 4));


const leftArray = ["Commanche 3", "Comanche", "VTOL VR"]; 
const rightArray = ["Ace Combat", "Project Wingman", "DCS"];
rightArray.push("VTOL VR");
leftArray.pop();
console.log(leftArray);
console.log(rightArray);

console.log(rightArray.indexOf("VTOL VR"));

let x = 5; 
if(Math.sign(x) === 1) {
    console.log("My number is positive"); 
}

console.log(Math.pow(8, 2));


console.log(Math.random() * 1000);

const nums = [10, 20]; 
console.log(nums[0]); 
let temp = nums[0];
nums[0] = nums[1];
nums[1] = temp; 


const newArr = [30, 40, 50, 60]; 
/*const reverse = (arr) => {
   
    let temp = arr[0];
    arr[0] = arr[3];
    arr[3] = arr[2]; 
    arr[2] = arr[1]; 
    arr[1] = arr[0]; 
    arr[0] = temp;
    
    return arr;

}
console.log(reverse(newArr)); */

const reverse = arr  => {
    return(arr.reverse());

}; 
console.log(reverse(newArr));

const reverse2 = (arr) => {
    let temp = arr[0]; 
    arr[0] = arr[3]; 
    arr[3] = temp; 
    temp = arr[1]; 
    arr[1] = arr[2]; 
    arr[2] = temp;
    return arr; 
}
console.log(reverse2(newArr)); 

const longArr = [1, 2, 3, 4, 5, 6]; 

const reverse3 = (arr) => {
    let temp = arr[0]; 
    arr[0] = arr[5]; 
    arr[5] = temp; 

    temp = arr[1]; 
    arr[1] = arr[4]; 
    arr[4] = temp; 

    temp = arr[2];
    arr[2] = arr[3];
    arr[3] = temp; 

    return arr; 
}
console.log(reverse3(longArr)); 
