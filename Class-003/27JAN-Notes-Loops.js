// loops are an easy way to repeat a fragment of code as many times as you want or until you reach a set condition

// two major loops, repeated a given number of times and loops that continue until some condition is met

/* while loop: 
while something is true... keep going



let n = 0; 
while(n < 20){
    console.log(n)
}; (INFINITE LOOP) */ 
let n = 0;

while(n < 10){
    console.log(n);
    n++; 
};
console.log(n);


let isOver = false; 
let counter = 1; 
while(isOver != true) {
    let continueLoop = confirm(`Continue the loop? ${counter}`); 
    // condition ? expression if true : expression if false; 
    isOver = continueLoop === true ? false : true; 
    counter += 1;  //  counter = counter + 1 or counter++
}; 

/* while loop that prints nums from 1 to 10 */
num = 1;
while(num <= 10){
    console.log(num)
    num++; 
}

/* while loop that calculates the sum of numbers from 1 to 20 */
let sum = 0; 
let x = 1;

while(x <= 20){
    sum = sum + x; // or sum += x
    x++;
    console.log(sum); 
}

/* do while loop that starts with the number 10 and prints all the numbers down to 1 */ 
let y = 11; 
while(y > 1){
    y--;
    console.log(y);
    
}

let newNum = 10; 
do{
    console.log(newNum--)
} while (newNum >= 1);

/* do while loop that prompts the user to entern numbers, if the user enters a negative number or 0 stop the loop */ 
/*
do{
    prompt(`Enter a number`, a); 
    a++;
} while (a >= 1); */

let newSum = 0;
do{
    input = parseInt(prompt["Enter a number.", 0])
    alert(`You entered ${input} and the sum is ${sum += input}`)
} while (input > 0)