// Problem 1 
function isLargest(num1 , num2) {
    if (num1 === num2) {
    return(num1 || num2);
} else if (num1 > num2) {
    return(num1); 
} else if (num1 < num2) {
    return(num2);
} 
}


console.log(isLargest(27,34));

// Problem 2
function isSafeAirspeed(num) {
    if (num > 184 && num < 583) {
    return("Safe Airspeed"); 
} else if (num < 184 || num > 583) {
    return("Unsafe Airspeed");
}
}

console.log(isSafeAirspeed(120));

//Problem 3
function confirmAge(num3) {
    if (num3 < 13 && num3 > 0) {
        return("Too young to participate.");
    } else if ( num3 > 12 && num3 < 18) {
        return("You are allowed to participate.");
    } else if (num3 > 17 ) {
        return("You are too old to participate.");
    } else if (num3 <= 0) {
        return("Invalid Age");
    }
}

console.log(confirmAge(17)); 