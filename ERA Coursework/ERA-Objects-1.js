/*
const myObject = {
name: "NSX",
type: "JDM Sports Coupe",
make: "Honda", 
year: 1998, 
doors: 2,
};
console.table(myObject); 
*/

const myCar = {
model: "Jetta GLI",
make: "Volkswagen",
year: 2019,
start: function() {
    console.log("The " + this.make + " " + this.model + " has started!"); 

}
}; 

console.table(myCar);
myCar.start(); 
