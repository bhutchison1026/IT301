//ARRAYS

/* let fruits = ['Apple', 'Orange', 'Banana'];
let newArray = [...fruits]; //make real copy of the array vs. let newArray = fruits points to the same object
newArray.push('Tomato');
console.log(newArray);
newArray.pop();
console.log(newArray);
console.log(Array.isArray(newArray)); */

/* //OBJECTS
let fruits = { //this is an object with three properties
    name: 'Apple',
    color: ['Red', 'Yellow', 'Green'],
    calories: 45
}

fruits.type = 'appleType';
fruits.calories = 95;

let key = 'color';
//console.log(fruits[key])

//console.log(fruits);
//console.log(fruits.color[1]);

let operation = {   //We can have functions in our objects
    //add: function(a,b) {return a + b},
    add: (a,b) => a + b,
    sub: function(a,b) {return a - b}
}

console.log(operation.add(5,3)); */

//ARRAY OF OBJECTS
/*  let fruits = [
    {name: 'Apple', color: 'Red', calories: 95},
    {name: 'Orange', color: 'Orange', calories: 54},
    {name: 'Banana', color: 'Yellow', calories: 120}
]
/*
console.log(fruits[1]['color']); */

/* let names = {
    name: 'Amy',
    greet: function(){return `Welcome ${this.name}!`}
}

console.log(names.greet(names.name)); 

//LOOPS
for (let fruit of fruits){
    console.log(fruit)
}

const student = {name: 'Liam', age: 20};
for (let key in student) {
    console.log(key)
}

for (let fruit of fruits){ //to visit all elements of the array in fruits
    for (let key in fruit){//for each object visit all the keys
        console.log (fruit[key])
    }
} 
*/

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num+5)); //forEach performs the operation


let doubleNumber = numbers.map((num) => num + 5); //map assigns output to an array
console.log(doubleNumber);

let newNumbers = numbers.filter((num) => num > 2); //map assigns output to an array
console.log(newNumbers);

let larger = numbers.find((num) => num > 3); //map assigns output to an array
console.log(larger);