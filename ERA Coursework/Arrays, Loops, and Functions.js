let sumOfTwo = (x, y) => {
    return(x + y); 
}
console.log(sumOfTwo(7, 8));

const twoValue = [10, 20]; 

twoValue.reverse();

console.log(twoValue);

revValue = twoValue.toReversed();
console.log(revValue);

/*
const arr = [34, 68];

const reverse = arr  => {
    return(arr.reverse());

}; 
console.log(reverse(arr)); */


/* function isLess(a, b) {
        return a < b; 
}; 
*/ 

const isLess = (a, b) => {
    if(a < b) {
        console.log(a < b);
    } else {
        console.log(a > b);
    }; 
}; 

isLess(4, 10); 

const array2 = [10, 20, 30]; 

const arrayMultiplier = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] *= x;
    } return arr; 
}

console.log(arrayMultiplier(array2, 3)); 




console.log(arrayMultiplier(array2, 3)); 
/*
function myArrayMax(arr) {
    return Math.max.apply(null, arr); 
};

console.log(myArrayMax(arrayNumbers)); */


/*arrayNumbers.sort(function(a, b){return b - a});
console.log(arrayNumbers); 

console.log(arrayNumbers[0] + arrayNumbers[1]); */

const arrayNumbers = [78, 32, 12, 111, 54]; 
/*
sumOfLarge = (arr) => {
    while(arr.sort(function(a, b){return b - a})) {
       return arr[0] + arr[1];
    }
    
}; 

console.log(sumOfLarge(arrayNumbers)); */

const max = (arr) => {
    let max = arr[0]; 
    let max2; 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max2 = max; 
            max = arr[i];
        }
    }
    return {max: max, max2: max2}; 
};

console.log(max(arrayNumbers));

function brb(x) {
    console.log("brb " + x + " mins"); 
}; 

brb(2); 

