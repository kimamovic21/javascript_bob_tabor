// class declaration 
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}

let myCar = new Car('bmw', '745li', 2010);
myCar.print();

// console.log(myCar);
//expression
// let car = class {
// }

class SportsCar extends Car {
    revEngine() {
        console.log('vrrrr goes this ' + this.model);
    }
}

let mySportsCar = new SportsCar('dodge', 'viper', 2007);
mySportsCar.print();
mySportsCar.revEngine();

myCar.revEngine();
