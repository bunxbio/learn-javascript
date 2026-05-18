class Vehicle {
    static numberOfVehicle = 0

    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        Vehicle.numberOfVehicle++;
    }
}

class Car extends Vehicle {
    wheels = 4;
    
    honk() {
        console.log('Honk! Honk!');
    }

    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }
}

class Motorcycle extends Vehicle {
    wheels = 2;
    
    beep() {
        console.log('Beep! Beep!');
    }

    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }
}

let myCar = new Car('Honda', 2000, 'Civic')
console.log(`my car is ${myCar.brand} ${myCar.model}, year ${myCar.year}, it has ${myCar.wheels} wheels`);
myCar.honk();

let myMotorcycle = new Motorcycle('Yamaha', 2025, 'Fazzio')
console.log(`my motorcycle is ${myMotorcycle.brand} ${myMotorcycle.model}, year ${myMotorcycle.year}, it has ${myMotorcycle.wheels} wheels`);
myMotorcycle.beep();

console.log(`number of vehicle: ${Vehicle.numberOfVehicle}`)