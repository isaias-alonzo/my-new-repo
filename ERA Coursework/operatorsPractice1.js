// Please come up with answers for each of the following, and then test your code to make sure they work. I will include answers in an email for checking purposes. Remember that you don't have no perform the calculations themselves--just set them up in code and let JavaScript handle it.

let a = 10;
let b = 20;
let c = 30;
// Example: Calculate the sum of a, b, and c, and output it to the console
console.log(a + b + c);

let burgerPrice = 3.49; // dollars
// 1. From a restaurant's app, you can order any quantity of a certain food item. Calculate the overall price of 35 burgers based on the burgerPrice variable above and output it to the console.



// 2. The restaurant from the previous question is offering a promo where you get $2.00 off of your total purchase. Calculate the overall price of 11 burgers with the promo then applied and output it to the console.



// 3. The previous question took a discount off the total price at the end. This time, the restaurant is having a promo where each burger itself is $0.50 off. Without changing the value of the burgerPrice variable, write code that calculates buying 7 burgers (you're getting tired of burgers) at the adjusted price and outputs the total price to the console.



// 4. The restaurant has decided to make the discounted burger price permanent. Write code using the subtraction assignment operator to take $0.50 off of the burgerPrice variable, and output the modified burgerPrice to the console.



// 5. Calculate the result (quotient) of dividing 15 by 4 and output the result to the console.



// 6. Calculate the *remainder* when dividing 15 by 4 and output the result to the console. (there is a special operator for this)



let wallet = 15; // dollars
burgerPrice = 4; // dollars
// 7. As an application of the previous question and based on the two variables above, write a line of code to calculate how much money you would have left over if you bought as many burgers as possible, and output your remaining money to the console.



// Here's a fun application of the remainder function. In the calendar, weeks always follow a predictable length of 7 days, repeating unto eternity. With this kind of consistence of a cycle, we can use the remainder function to predict the day of the week, no matter how many days in the future we want to know. 7 days from today is the same weekday. 14 days from now is the same weekday. 777 is the same weekday since we've covered 111 full weeks of 7 days. Using the remainder function with the following equation, the resulting number will tell us the index of the weekday it will be so many days in the future. We do have to make sure to add in the index of the current day at the start so that it will count from the right day of the week
// index     0      1      2      3      4      5      6
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let daysPassed = 100;
let currentDayIndex = 5; // Friday
console.log(
    (daysPassed + currentDayIndex) % 7
);

// The index answer we got is dependent on the array I created above. To get the weekday name, we have access it from the array. We use the result of our calculation as the array index to access
weekdays[(daysPassed + currentDayIndex) % 7];

// Naturally, we want to see our answer, so it goes into a console.log()
console.log(weekdays[(daysPassed + currentDayIndex) % 7]);

// 8. Using the above code, what will the weekday be 40 days from now? 100 days from now? 365 days from now? Reassign the value of the daysPassed variable below and then copy and run the code from above again. Feel free to play with it and tweak it.