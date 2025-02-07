//classes objects methods
//classes fundamental building blocks in object oriented design (OOP)
//allows for code organization, reusability and encapsulation

/* 
code reusability: classes that let you define a structure once, then reuse it

Encapsulation: bundles fata (properties) and behavior (methods)


Inheritance: Allows for extending functionality from one class to another


Abstractions: Hides unnecessary details and provides a clear interface 

Modularity: Helps break down complex systems into manageable parts



*/
//define a class by using class keyword This usually includes a constructor method to initialize its own properties as well as additional methods

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`)
    }
}

let person1 = new Person("Isaias", 28);

person1.greet();
//define class and constructor and methods
class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        console.log(`${this.make} ${this.model} is starting.`)
    }
    stop(){
        console.log(`${this.make} ${this.model} is stopping.`)
    }
}
let beater = new Car("Ford", "Fusion");
let classy = new Car("Toyota", "Celica");

beater.start();
classy.stop();

//Inheritance: 

class Employee extends Person {
    constructor(name, age, jobTitle){
        super(name, age);
        this.jobTitle = jobTitle;

    }
    greet(){
        console.log(`Hi, I'm ${this.name}, a ${this.jobTitle}`) //overriding method
    }
}
//can only extend one class

const empl1 = new Employee("Tony", 59, "Boss");
empl1.greet()

//encapsulation
//restricts direct access to some of an object properties
//# to create private properties

class BankAccount{
    
    #balance; //private 
    constructor(owner, balance){
        this.owner = owner;
        this.#balance = balance; 
    }

    deposit(amount){
        this.#balance += amount; 
        console.log(`Deposited ${amount}. New balance: ${this.#balance}`)
    }
}
let account1 = new BankAccount("Julian", 1000000);

account1.deposit(5000);

//create a player class where each player has health and name. The class will include a method to attack another player reducing their health

class Player{
    constructor(name, health){
        this.name = name;
        this.health = health;

    }

    ultimatePunch(target){
        if(target.health > 0){
            target.health -= 100;
            console.log(`${this.name} hit ${target.name}! ${target.name} now has ${target.health} health!`)
        }else{
            console.log(`Chill! ${target.name} is already dead!`)
        }
        
        
    }
}

let mario = new Player("Mario", 1000);
let halo = new Player("John Halo", 1001);

mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);
mario.ultimatePunch(halo);