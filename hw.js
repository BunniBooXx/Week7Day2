//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
// we need a string to fill in the blanks
// my favorite ___ is ___ 
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

const favoriteFoods = (food) => {
     if (food){
        console.log("my favorite" + (food) + "is" + (dish) )
     }
     if (dish == []){ 
        for i in []: 
        console.log("my favorite" + (food) + " is " + (dish) )
    
     }
    }
console.log(favoriteFoods(pizza))




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


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


const Person =  (name,age) => {
    this.name = name; 
    this.age = age;
}
Person.prototype.addAge = (age) => {
    age +3;
};

Person.prototype.printInfo = printInfo = () => {
console.log(this.name + " is " + this.age + " years old.")
};
Person.prototype.changeName = function changeName(newName){
this.name = newName
};




var person1 = new Person ('Jaqueline', 28)
var person2 = new Person('Dan', 34)
Jaqueline.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// Promises

const Length = () => {
    return new Promise((word)=> {
        if (word.length(10+word)){
                console.log('Big word')
            }
        if (word.length(10 - word )){
            console.log('Small Number')
        }
    })}

console.log(Length('Hi'))
