// VARIABLES
let firstName = 'John';
let lastName = 'Doe';

const DATE_OF_BIRTH = '2005.09.18';


// DATA TYPES
let favoriteFood = 'Pizza'; //string

let numberOfFood = 20; //number
let pi = 3.14;

let veryLargeNumber = 123345457123n; //BigInt

let learning = true; //boolean

let hungry; //undefined

favoriteFood = null; //null

const uniqueKey = Symbol(); //symbol

//object
let course = {
    name: 'JavaScript course',
    hours: 1,
}

let products = ['shirts', 'pants']

function sayHi(name) {
    return `Hi ${name}`;
}

console.log(sayHi(firstName));