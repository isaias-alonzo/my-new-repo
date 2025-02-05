

/* Define a class called "Animal" with the following properties: "name" and "age".
Define a method in the "Animal" class called "speak" that logs a message to the console.
Define a subclass of "Animal" called "Dog" that has an additional property called "breed".
Override the "speak" method in the "Dog" subclass to log a different message to the console.
Create an instance of the "Dog" class and call the "speak" method.
Save the HTML file and open it in a web browser. Open the developer console and verify that the output of the object oriented programming code is correct.*/

/*
let animal = {
    name: "Reginald", 
    age: 3, 
}; 

let keys = Object.keys(animal);



animal.dog.breed = "Doberman"; 

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key + ":" + animal[key]);
}; */

class animal {
    constructor(name, age) {
    this.name = name; 
    this.age = age; 
    }

speak() {
    console.log(`Listen up, ${this.name}!`);
}
};

class Dog extends animal {
    constructor(breed) {
        super(breed); 
    }


speak() {
    console.log(`${this.name}, speak!`); 
}
}

const doggie = new Dog("Estefan");

doggie.speak();


