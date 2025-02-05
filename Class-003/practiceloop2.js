//Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.
 
for(let i = 100; i >= 0; i -= 10){
    console.log(i); 
}


//Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).
let firstNum = parseInt(prompt["Provide a number.", 0])
let lastNum = parseInt(prompt["Provide a smaller number", 0])
for(let i = firstNum; i >= lastNum; i -= 10){
    alert(i); 
}


//Write a program that first writes out all these numbers on the console, then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), 
// then only those that are larger than 10 and at the same time smaller than 60.
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

console.log("all numbers: ")
for(let num of numbers){
    console.log(num)
};
console.log("\n even numbers: ");
for(let num of numbers){
    if(num % 2 === 0){
        console.log(num)
    }
};

console.log("\n numbers larger than 10 and smaller than 60")

for(let num of numbers){
    if(num > 10 && num < 60){
    console.log(num);
}
};


for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}    
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
}    
}
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= 10 && numbers[i] <= 60){
        console.log(numbers[i])
    } 
}    
   
    
 
   




//Fill in the blanks to make the loop print numbers from 0 to 4.
for (let i = 0; i <= 4; i++) {
    console.log(i);
}


//Fill in the blank so that the loop prints only odd numbers from 1 to 10.
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

//Fill in the blanks to make the loop count down from 5 to 0.
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

//Fill in the blank so that the loop adds numbers from 1 to 5 correctly.
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);


