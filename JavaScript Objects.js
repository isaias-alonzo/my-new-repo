/* Declare an object called "person" with the following properties: "name", "age", "gender", and "email".
Print the value of the "name" property to the console.
Use dot notation to add a new property called "occupation" to the "person" object.
Use bracket notation to add a new property called "address" to the "person" object.
Use a for-in loop to iterate over the "person" object and print each property and its value to the console.
Save the HTML file and open it in a web browser. Open the developer console and verify that the output of the object properties is correct.
*/

let person = {
    name: "Tony Montana",
    age:  33,
    gender: "Male",
    email: "scarface@aol.com",

}; 


console.log(person.name);

person.occupation = "Sanitation"; 

console.log(person.occupation);

person["address"] = "3351 South Beach Blvd."; 

console.log(person.address);

for(let key in person) {
    console.log(key + ":" + person[key]);
}
