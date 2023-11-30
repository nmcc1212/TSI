// function to calulate time taken to travel a distance

function calculateTime(distance: number, speed?:number): number {
    if (typeof speed === 'undefined') {
        speed = 80;
    }
    return distance / speed;
}

function daysToJupiter(): number {
    const distanceToJupiter = 365000000;
    // speed random number between 40 and 500
    const speed = Math.floor(Math.random() * (500 - 40 + 1) + 40);
    return calculateTime(distanceToJupiter/speed);
}

// define class vehicles with mathods and with child classes with properties speed

class Vehicle {
    speed: number;
    name: string;
    constructor(speed: number, name: string) {
        this.speed = speed;
        this.name = name;
    }
    getTime(distance: number): number {
        return distance / this.speed;
    }
}


class Spaceship extends Vehicle {
    constructor(speed: number, name: string) {
        super(speed, name);
    }
}

class Car extends Vehicle {
    constructor(speed: number, name: string) {
        super(speed, name);
    }
}

class Bike extends Vehicle {
    constructor(speed: number, name: string) {
        super(speed, name);
    }
}

class MobilityScooter extends Vehicle {
    constructor(speed: number, name: string) {
        super(speed, name);
    }
}

// create objects of child classes and call getTime method

const spaceship = new Spaceship(100000, 'Rocket go brrrr');
const car = new Car(100, 'Vroom');
const bike = new Bike(10, 'Pedal');
const mobilityScooter = new MobilityScooter(15, 'Sad car noises');

console.log("It would take",spaceship.getTime(1000000), "hours to travel 1,000,000 miles in a spaceship going at", spaceship.speed, "mph");
console.log("It would take",car.getTime(1000000), "hours to travel 1,000,000 miles in a car going at", car.speed, "mph");
console.log("It would take",bike.getTime(1000000), "hours to travel 1,000,000 miles in a bike going at", bike.speed, "mph");