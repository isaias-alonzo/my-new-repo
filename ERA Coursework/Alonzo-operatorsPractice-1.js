let a = 10;
let b = 45; 
let c = 37; 

console.log(a + b + c);

let burgerPrice = 3.49; 
let burgerAmount = 35; 
console.log(burgerAmount * burgerPrice); 

let promoDiscount = 2; 
let burgerLess = 11; 
console.log(burgerLess * burgerPrice - promoDiscount);


let burgerPurchase = 7;
let discountBurger = burgerPrice - 0.50; 
console.log(burgerPurchase * discountBurger);

burgerPrice = 3.49 - 0.50; 

console.log(burgerPrice);

console.log(15 / 4);

console.log(15 % 4); 

let wallet = 15;
burgerPrice = 4; 

console.log(wallet % burgerPrice); 


const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let daysPassed = 100;
let currentDayIndex = 5; // Friday
console.log(
    (daysPassed + currentDayIndex) % 7
);

daysPassed = 1;
console.log(weekdays[(daysPassed + currentDayIndex) % 7]);

daysPassed = 40; 
console.log(weekdays[(daysPassed + currentDayIndex) % 7]);

daysPassed = 100; 
console.log(weekdays[(daysPassed + currentDayIndex) % 7]);

daysPassed = 365;
console.log(weekdays[(daysPassed + currentDayIndex) % 7]);

console.log(365 % 7)