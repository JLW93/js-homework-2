//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFood(arr) {
    for (let i = 0; i < Object.values(arr).length; i++){
        if (Object.keys(arr)[i].constructor === Array) {
            for (let j = 0; j < Object.values(i).length; j++){
                console.log(Object.values(i)[j]);
            };
        } else {
            console.log(Object.values(arr)[i]);
        };
    };
    return "Finished looping"
}

console.log(favoriteFood(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method

    this.printInfo = () => {
        console.log(`${name} is ${age} years old.`);
        return 'Done'
    };

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = () => {
        this.age++;
        return this.age
    };
};

let person4 = new Person('Kevin', 23);
let person5 = new Person('Danielle', 19);

console.log(person4.printInfo())
console.log(person5.printInfo())

// Adding to the age 
console.log(person5.addAge())
console.log(person5.addAge())
console.log(person5.addAge())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const lengthMoreThanTen = (string) => {
    return new Promise((resolve, reject) => {
        if(string.length > 10) {
            console.log('Big Word');
            resolve(true);
        } else {
            console.log('Small Number')
            reject(false)
        };
    });
};

console.log(lengthMoreThanTen('supercalifragilisticexpialidocious'))
console.log(lengthMoreThanTen('Bingo'))