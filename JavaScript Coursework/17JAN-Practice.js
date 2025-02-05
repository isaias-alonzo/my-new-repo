"SELECT * FROM enterprise.cars WHERE name = 'Fiat';"

const result = [
    {type: "Fiat", model: "500", color: "White"}, 
    {type: "Fiat", model: "124 Spider", color: "silver"}, 
    {type: "Fiat", model: "500 Abarth", color: "red"}, 
    {type: "Fiat", model: "Bravo", color: "black"}, 
    {type: "Fiat", model: "500", color: "lime"}, 

];

console.log(result[0]); 

document.write(`<p>Testing</p>`); 
// anytime document is used, it means the entire webpage
// an element in JS == "tag" in HTML

let newPara = document.createElement("p"); 
console.log(newPara);

//modified content of my new element (that is noty yet on the webpage)

newPara.innerHTML = "Test Two"; 

//can use newPara.innerHTML or newPara.textContent
// Add my new HTML element to the webpage
document.querySelector("body").appendChild(newPara); 
// use "." for class use "#someId" for a symbol 

let firstCar = result[0]; 

let carElement = document.createElement("p"); 

carElement.innerHTML = firstCar.color + " " + firstCar.type + " " + firstCar.model; 
document.querySelector("body").appendChild(carElement); 

function loadCar() {
    let car = result[1];
    let carElement1 = document.createElement("p"); 
    carElement1.innerHTML = car.color + " " + car.type + " " + car.model; 
    document.querySelector("body").appendChild(carElement1); 
}

function loadAllCars() {
    if(document.querySelector("#carList") != null) {
        removeCarList(); 
    } 
    for(let i = 0; i < result.length; i++) {
        let carElement1 = document.createElement("p"); 
        carElement1.innerHTML = result[i].color + " " + result[i].type + " " + result[i].model; 
        document.querySelector("body").appendChild(carElement1); 
    } 
}

function loadAllCarsIntoDiv() {
    if(document.querySelector("#carList") != null) {
        removeCarList(); 
    } 
    let divElement = document.createElement("div"); 
    divElement.setAttribute("id", "carList"); 
    for(let i = 0; i < result.length; i++) {
        let carElement1 = document.createElement("p"); 
        carElement1.innerHTML = result[i].color + " " + result[i].type + " <strong>" + result[i].model + "</strong>"; 
        divElement.appendChild(carElement1); 
         
    }
    document.querySelector("body").appendChild(divElement);  
}

const removeCarList = () => {
    //document.getElementById("carList").remove(); 
    let carList = document.getElementById("carList");
    console.log("it works!"); 
    if(carList != null) {
        carList.remove();
    } 
}

const changeText = () => {
    document.querySelector(".someText").innerHTML = "<em>Here is some more text!</em>"
}