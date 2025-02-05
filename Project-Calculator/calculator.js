document.getElementById("seven").addEventListener(
    "click",
    function (e) {
        console.log("Seven was clicked!");
        console.log(e);
        console.log(e.target);
        console.log(e.target.textContent);
    }
);

const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".calculator__display");
const keys = calculator.querySelector(".calculator__keys");

// The document.querySelector(selector) method returns the FIRST (only one) HTML element that matches the provided CSS selector argument
keys.addEventListener("click", function (e) {

    const key = e.target;
    const action = key.dataset.action;
    if (key.matches("button")) {
        console.log("previous key type: " + calculator.dataset.previousKeyType);

        // Remove .is-depressed class from all keys
        /*Array.from(key.parentNode.children).forEach(k =>
            k.classList.remove('is-depressed'),
        )*/

        //Better way to remove depressed keys 
        for(let k of key.parentNode.children) {
            k.classList.remove('is-depressed');
        }

        if (!action) {
            if (display.textContent === "0" || calculator.dataset.previousKeyType === "operator") {
                display.textContent = key.textContent;
            } else {
                display.textContent += key.textContent;
            }
            console.log("Digit pressed!");
            calculator.dataset.previousKeyType = "number";
        }

        if (action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide") {
            key.classList.add('is-depressed');
            
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = display.textContent;

            if(firstValue && operator && calculator.dataset.previousKeyTyipe !== "operator") {
                console.log("Operator calculation triggered!");
                display.textContent = calculate(firstValue, operator, secondValue) 
            }
            
            calculator.dataset.firstValue = display.textContent;
            calculator.dataset.operator = action;
            calculator.dataset.previousKeyType = "operator";
            console.log("Operator key pressed!");
        }


        if (action === "decimal") {
            if (!calculator.dataset.previousKeyType === "operator") {
                display.textContent = "0.";
            } else if (!display.textContent.includes(".")) {
                display.textContent += ".";
            }
            console.log("Decimal key pressed!");
            calculator.dataset.previousKeyType = "decimal";
        }

        if (action === "clear") {
            display.textContent = "0";
            console.log("Clear key pressed!");
            calculator.dataset.previousKeyType = "clear";
        }

        if (action === "calculate") {


            calculate(firstValue, operator, secondValue);
            if(firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }
            }
            display.textContent = calculate(firstValue, operator, secondValue);
            console.log("Calculate key pressed!");
            calculator.dataset.previousKeyType = "calculate";
        }
    }
});

const calculate = (num1, operator, num2) => {
    console.log(`f: ${num1} | o: ${operator} | s: ${num2}`);
    /*parsing means recognizing and sometimes pulling one type of value out of another like parseInt(number) - pulls an integer from a string to turn it to a number type and parseFloat(number) which takes a floating point number from a string */
        if(operator === "add") 
            return parseFloat(num1) + parseFloat(num2);
        else if(operator === "subtract") 
            return parseFloat(num1) - parseFloat(num2);
        else if(operator === "multiply") 
            return parseFloat(num1) * parseFloat(num2); 
        else if(operator === "divide") 
            return parseFloat(num1) / parseFloat(num2);
        else if(operator === "square")
            return parseFloat(num1) ** 2;
        else 
            return "Error";
        };
    
/* optimizations made: return calculations directly instead of intermediary variable result; if an if-statement only has one line of code inside you can leave off the curly braces


let result;
    if (operator === "add") {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "subtract") {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "multiply") {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === "divide") {
        result = parseFloat(num1) / parseFloat(num2);
    } else {
        result = "Error";
    }
    return result;
};
*/

/*const calculateWithSwitch = (num1, operator, num2) => {
switch(operator) {
    case "add":
    result = parseFloat(num1) + parseFloat(num2);
    break;
    case "subtract":
    result = parseFloat(num1) - parseFloat(num2);
    break;
    case "multiply":
    result = parseFloat(num1) * parseFloat(num2);
    break;
    case "divide":
    result = parseFloat(num1) / parseFloat(num2);
    break;
} 
    return result;
}
    
const calculateWithSwitch = (num1, operator, num2) => {
switch(operator) {
    case "add":     return parseFloat(num1) + parseFloat(num2);
    case "subtract": return parseFloat(num1) - parseFloat(num2);
    case "multiply": return parseFloat(num1) * parseFloat(num2);
    case "divide": return parseFloat(num1) / parseFloat(num2);
} 
    */



