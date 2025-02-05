/* Errors:
SyntaxError typos or improper code THESE ALWAYS STOP THE CODE IT DOESN'T KNOW WHAT TO REFERENCE 
ReferenceError accessing something that is not available
SemanticError -> run time error
TypeError certain values is not expected similar to syntax error
trying to change a const variable or even trying to check the length of something tht is not a string or an array

RangeError -> run time error; passing a value to something that is outside of its acceptable range

Rare Errors:
evalError
URIError
internalError


try... catch statement -> allows exceptions to our functions will interrupt what is being done but will not terminate automatically 
syntax: 

try {
    // code to try
} catch(error){
    //code to run in case of error, which throws an exception
}
The program will continue to run outside from the first code of the try catch statement 
error variable stores the error that was thrown 
most common error variable names are error, err, or e
*Example Below*
*/

//let people = {
//     Lamar: ["Clam Chowder", "pizza"],
//     Kyle: ["Andouille Pasta", "Cheez-Itz"],
//     Steve:  ["Pizza", "Broccoli Beef"],
//     Kenny:  ["Chilli", "Slaw"]
// }

// try{

// for(let person in people){
//     console.log('\n' + person);
//     for(let favorite of people[person]){
//         console.log(favorite);
//     }
   
// }
// } catch(error){
//     console.log("You have a " + error)
// }
// Output: You have a ReferenceError: people is not defined

/* finally statement 
used with or without the catch block
always executed after the try and catch block, regardless 

syntax:
try{

} finally{
 
}
kinda like an if else statement 



*/ 
/*
let a = 10; 
try {
    a = b; 
}catch(error){
    console.log("You have an error")
} finally{
    console.log("Finally")
}

console.log(a)
// it tryed to run the code; failed, ran the catch statement and the finally statement */

let a = 10; 
try{
    a = b;
}catch(error){
    try{
        console.log(b)
    }catch{
        console.log("Second catch")
    }
}finally{
    console.log("Finally")
}

//multiple chances to fix your shit, and a finally if it doesn't work, an if/else statement for errors, if you will. 

console.log("start");
try{
throw 400;
}catch(error){
console.log("end");
}

// function factorial(n){
// let result = 1;
// for(; n > 1; n--){
//     result *= n
// }
// return result;
// }
// console.log(factorial(20));
function factorial(n){
    if (n > 20){
        throw new RangeError("Max value is 20")
    }
    let result = 1;
    for(; n > 1; n--){
        result *= n;
    }
    return result;
}

console.log(factorial(21))

// you can use this to provide an arbitrary limit on your function 



// try{
//     console.log("Start);

//     } catch(error){
//         console.log("You have a " + error); 
//     }
    
//     console.log("End");
// let myArray
//     try{
//         let myArray = new Array(-5);
 
//     } catch(error){
//         console.log("You have a " + error)
//     } finally{
//         console.log("Finally")
//     }
// let a = 10; 
//     try{
//         let b = c; 
//     } catch(error){
//         console.log("You have a " + error)
//     } finally{
//         console.log("Nu uh")
//     }