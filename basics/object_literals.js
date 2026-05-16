// FACTORY functions
function getDog(name, breed, age, weight) {
    return {
        name,
        breed,
        age,
        weight,
        eat() {
            console.log('chomp!')
        },
        bark() {
            console.log('bark!')
        },
    }
}

const dog1 = getDog('Marley', 'Dalmatian',4, 10);
console.log(dog1);


// CONSTRUCTOR functions
function Dog(name, breed, age, weight) {
    //this = {}

    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;

    this.eat = function() {
        console.log(`${this.name}: chomp!`);
    }

    this.bark = function() {
        console.log(`${this.name}: bark!`);
    }

    //return this;
}

const dog2 = new Dog('Bob', 'Husky', 5, 12);
console.log(dog2);