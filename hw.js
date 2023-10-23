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


function displayFavDishes(person){
    for (let key in person) {
        console.log(`${key}:`);
        if (Array.isArray(person[key])) {
            person[key].forEach((dish,index) => {
                console.log(` ${index + 1}. ${dish}`);
            });
        } else if (typeof person[key] === "object"){
            for (let resturant in person[key][0]){
                console.log(` ${resturant}: ${person[key][0][resturant]}`);
            }
          
        }
        else {
            console.log(` ${person[key]}`)
        }
    }
}

console.log(displayFavDishes(person3))
//const favoriteFoods = (food) => {
//     if (food){
//        console.log("my favorite" + (food) + "is" + (dish) )
//     }
//     for (i in dish){
//     if (dish == []){ 
//        console.log("my favorite" + (food) + " is " + (dish) )
    
//     }

//     if(dish == {}){
//        console.log("my favorite" + (food)+ "at" + Object.keys(resturant) + " is " + Object.values(flavor))
//     }
    
//    }
//    }
//console.log(favoriteFoods(pizza))




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
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printInfo = function() {
    console.log( `Name : ${this.name}, Age: ${this.age}`);
};

Person.prototype.addAge = function (years) {
    this.age += years;
}

const person1 = new Person("Jaqueline", 26)
const person2 = new Person ("Dan", 34)

person1.printInfo()
person2.printInfo()

person1.addAge(3)

 
person1.printInfo()
person2.printInfo()

//const Person =  (name,age) => {
  //  this.name = name; 
   // this.age = age;
//}
//Person.prototype.addAge = (age) => {
  //  age +3;
//};

//Person.prototype.printInfo = printInfo = () => {
//console.log(this.name + " is " + this.age + " years old.")
//};
//Person.prototype.changeName = function changeName(newName){
//this.name = newName
//};
//var person1 = new Person ('Jaqueline', 28)
//var person2 = new Person('Dan', 34)
//Jaqueline.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// Promises



function checkLength(string) {
    return new Promise((resolve, reject) => {
      // Check if the length of the string is greater than 10
      if (string.length > 10) {
        // If the length is greater than 10, resolve the Promise with the message "Big word"
        resolve("Big word");
      } else {
        // If the length is less than or equal to 10, reject the Promise with the message "Small Number"
        reject("Small Number");
      }
    });
  }

  console.log(checkLength("Hi"))

//const Length = () => {
  //  return new Promise((word)=> {
    //    if (word.length(10+word)){
      //          console.log('Big word')
        //    }
        //if (word.length(10 - word )){
        //    console.log('Small Number')
       // }
   // })}

//console.log(Length('Hi'))
