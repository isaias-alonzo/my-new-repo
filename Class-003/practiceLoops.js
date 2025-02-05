// Instructions:
// 1. Initialize a variable `count` to 10.
// 2. Use a `while` loop to print the countdown numbers.
// 3. After the loop ends, print "Blast off!"
let count = 10; 
while (count > 0){
    console.log(count--)
    
}
console.log("Blast off!")

// Instructions:
// 1. Generate a random number using `Math.random()` and store it in a variable.
// 2. Use a `while` loop to keep asking the user to guess the number.
// 3. If the guess is correct, exit the loop and print "Correct!".
// 4. If not, prompt the user to guess again.
/* 

let a = parseInt(Math.random() * 1000); 
let input; 
while (a != input){
    input = parseInt(prompt["Enter a number.", 0])
    input == a ? console.log("Correct") : parseInt(prompt["Enter a number.", 0]);

}*/ 
const randomNumber = Math.floor(Math.random() * 10) + 1; 
let userGuess = 0; 
while(userGuess !== randomNumber){
    userGuess = parseInt(prompt["Guess a number between 1 and 10.", 10])
 if (userGuess === randomNumber){
    alert("Correct!") 
    break; 
} else if(userGuess > randomNumber || userGuess < randomNumber){
    alert("Guess again")
}
}
// Instructions:
// 1. Define a variable `correctPassword` with a value like "javascript123".
// 2. Use a `do...while` loop to ask the user to enter the password.
// 3. If the password matches `correctPassword`, print "Access granted!" and exit.
correctPassword = "javascript123";
let input;
let passwordAttempt = 1;
do{
    input = prompt["Enter password"]

     if(input !== correctPassword){
    alert("Incorrect password... try again.")
    passwordAttempt++;
    }
    if(passwordAttempt > 3){
        alert("Maximum amount of attempts. Try again later.")
        break;
    }
   
} while(input !== correctPassword)
if(input === correctPassword){
    alert("Access granted!")
}
// Instructions:
// 1. Use `prompt()` to get a starting number from the user.
// 2. Use a `do...while` loop to print numbers in descending order until 1 is reached.




let n = 0;
while (n <= 30) {  // Fill in the condition
    console.log(n);
    n = n + 2;   // Fill in how to increase `n` by 2
}



let isOver;
do {
    isOver = confirm("Do you want to continue?");
} while (isOver === true);  // Fill in the condition to repeat if the user clicks "OK"



