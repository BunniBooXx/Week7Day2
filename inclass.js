console.log("Hello world 2")

// Day 2: Continue with control flow
// switch case statement
// Object () class 
const day = new Date().getDay();
console.log(day, typeof day)


const literalDay = new Date.toString(); 
console.log(literalDay, typeof literalDay)


switch(day){
    case 0:
    console.log('Sunday')
    break
    case 1:
    console.log('Monday')
    break
    case 2: 
    console.log('Tuesday')
    break
    case 3: 
    console.log('Wednesday')
    break
    case 4: 
    console.log('Thursday')
}



switch(literalDay){
    case "Sun":
    console.log('Sunday')
    break
    case "Mon":
    console.log('Monday')
    break
    case "Tue": 
    console.log('Tuesday')
    break
    case "Wed": 
    console.log('Wednesday')
    break
    case "Thurs": 
    console.log('Thursday')
}; 



// JS Object (Aka Python Dictionaries)

const person = {
    name : "Jaqueline", 
    age : 9001, 
    teams: [
        'Nets', 
        'Mets',
        'Jets'
    ], 
    wallet: {
        visa: 100, 
        amex: 1000, 
        bofa: 20
    }
}
// acccess data in obj
console.log(person['name']) // bracket notation
console.log(person.name) // dot notation

// get keys / values / pairs

// person.keys() // this does not work 
// .keys() is a static method 
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))


// loop through the keys 

for (let item in person) {
    console.log(item)
};

for (let item of Object.keys(person)) {
    console.log(item,2)
};

///OOP 
// Prototypes vs Classes
// create a prototype 
// do not need self for Classes in JS instead we use the keyword this 
// JS does not care if you have too little or too many arguments, no errorr message
// JS does not care about order either 
function Car(make, model, y){
    this.make = make ;
    this.model = model;
    this.year= y;
    this.mileage= 0
    

    this.drive = function(miles){
        this.mileagee += miles
        console.log(`Your odometer reading: ${this.mileage}`)

    }
};

const c1 = new Car('Honda', 'Civic', 1999)
console.log(c1.make)
console.log(c1.model)
console.log(c1.year)
c1.drive(100)
c1.drive(2000)
c1.park()


// Classes 


class Sentient{
   
    constructor(lifespan=100){
        this.lifespan = lifespan

    }



    func1 = function(){
console.log(1)
    }

    func2 = () => {console.log(2)}

}

being1= new Sentient()
console.log(being1.lifespan)

class Human extends Sentient {
    constructor(lifespan, name, age, color, hobbies=[]){
        super(lifespan)
        this.name = name,
        this.age = age, 
        this.favoriteColor = color,
        this.hobbies = hobbies

    }
    func2 =() =>{
        console.log('this is Humans Function #2')
        
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

const h1 = new Human (101, 'Shoha', 9001, "Blue", ['biking','sailing'])
h1.func1()
h1.func2()
h3.talk()
console.log(h1.lifespan)


// destructring an array

const person1 = ["Shoha", "Tsuchida", 9001]
//const first_name = person1[0]
// const last_name = person1[1]
// const age = person1[2]
const [first_name, last_name, age] = person1// destructure


// destructering an object
// your variable name will be the key name
const pokemon = {
    pokemonName : "Pikachu", 
    imgUrl:'google.com', 
    abilities:['thunderbolt', 'shockwave'], 
    hp: 10 
}

const {imgUrl,abilities} = pokemon 
console.log(imgUrl)
console.log(abilities)

// Asynchornous Section of JS

const snooze5(action){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    action()    
}

snooze5(c1.park)

// Promises
const cook = () => {
    return new Promise((resolve,reject)=>{
        if (dish == 'pasta'){
            setTimeout(()=>{
                resolve('pasta is done!')
            })
            else if (dish == 'rice'){
            setTimeout(())
            resolve('rice is done!')
        }
        else {
            reject('i dont know how to cook that')
        }
    
    }})
}
const res1= cook('pasta')
const res2 = cook('rice')
const res3 = cook('pb&j sandwich')


console.log(res1)
console.log(res2)
console.log(res3)

cook('rice')

/// Handling response of a promise 
// 2 ways
// old way : .then() / .catch()
cook('something else')
.then((res)=>{
    console.log(res)
})

.catch((err)=>{
    console.log("error", err)
})



//ES6 way async / await
// these key words must be used within functions
const kitchen = () => {
    cook('pasta')
    const res = await cook('rice')
    console.log(res)
    cook('fried rice')
}
kitchen()



// these are the two places the keyword ASYNC will go
 async function hi(){}

const func2 = () async => {}




// for key val in dict.items()




// HW Question 1
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
        console.log("my favorite" + (food) + "is" + ([1]) )
     }
    }
console.log(favoriteFoods(pizza))


// QUestion 2
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