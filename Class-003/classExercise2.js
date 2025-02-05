// Fill in the blanks to complete the program:
let light = "yellow";

switch (light) { // Replace with the correct expression
    case "red":
        console.log("STOP"); // Replace with the appropriate action
        break;
    case "yellow":
        console.log("CAUTION"); // Replace with the appropriate action
        break;
    case "green":
        console.log("GO"); // Replace with the appropriate action
        break;
    default:
        console.log("Invalid input");
}


// Fill in the blanks to complete the function that calculates the perimeter of a rectangle:
function calculatePerimeter(w, h) { // Fill in the parameters
    return (2 * w) + (2 * h); // Complete the formula
}

console.log(calculatePerimeter(5, 10)); // Expected Output: 30



// Complete the code to determine if a person is an adult or a minor:
let age = 16;

let status = (age >= 18) ? "Adult" : "Minor"; // Complete the ternary operator
console.log(status); // Expected Output: "Minor"



// The following code has an error. Fix it so that it works as intended:
let color = "blue";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Caution");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}


// The following function is supposed to calculate the total price (price × quantity), but it doesn’t work. Fix the error:
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(10, 3);
console.log(total); // Expected Output: 30
