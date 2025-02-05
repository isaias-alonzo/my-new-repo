class dog {
    constructor(name, breed, birthYear) {
        this.name = name; 
        this.breed = breed; 
        this.birthYear = birthYear;
    } 
};

let myDog = new dog("Rufus", "Mutt", 2020);
console.log(myDog);
let yourDog = new dog("Dory", "Pitt mix", 2007);
console.table(yourDog);
dog.bark = function() {console.log("Bark!")}; 
dog.bark();


class dogWithMethods {
    constructor(name, breed, birthYear, isFriendly = false){
        this.name = name; 
        this.breed = breed; 
        this.birthYear = birthYear;
        this.isFriendly = isFriendly;
    }
bark() {
    console.log("Bark!");
}

};
let dogOurs = new dogWithMethods("Shadow", "Golden Retriever", 2021, true);
console.table(dogOurs);

dogOurs.bark();
/*
dog.walk() {
    walk 
}

getAge() {
    const d = new Date();
    let currentYear = d.getFullYear(); 
    return currentYear = this.birthYear;

};

getName() {
    return this.name;
}

setName(newName) {
    if(typeOf newName ===  "String") {
        this.name = newName;
    
    }
} */

    // Private properties - properties that cannot be accessed directly
class User {
    #username;
    #password;
    #email
    constructor(user, pw) {
        this.#username = user;
        this.#password = pw;
        // this.#email = email;
    }
    getUsername() { // classic getter method
        return this.#username;
    }
    get username() { // more recent getter method that enables me to access the username property like a normal property but only by its own rules as laid out in the function body below
        return this.#username.toUpperCase();
    }
    setUsername(newUsername) {
        if(typeof newUsername === "string" && newUsername.length <= 20 && newUsername.length >= 3) {
        this.#username = newUsername;
    } else {
        console.log("Invalid username provided.")
    }
}
}

let user1 = new User("john", "cantseeme");
console.log(user1.username);

// console.log(user1.#username); // error
// console.log(user1.#name);/
console.log(user1.getUsername())
user1.username = "x"
user1.setUsername("Cena");
console.log(user1.username)
console.log(user1.getUsername()) 