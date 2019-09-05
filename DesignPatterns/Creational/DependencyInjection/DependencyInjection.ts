interface Propulsion {
    move(): void;
}

class Vehicle {
    constructor(private engine: Propulsion) {
    }

    forward(): void {
        this.engine.move();
    }
}

class RaceCarEngine implements Propulsion {
    move(): void {
        console.log("Vrrrooooommm!!");
    }
}

class RocketEngine implements Propulsion {
    move(): void {
        console.log("3-2-1... LIFT OFF!!!");
    }
}

const raceCarEngine = new RaceCarEngine();
const car = new Vehicle(raceCarEngine);
car.forward();

const rocketEngine = new RocketEngine();
const car2 = new Vehicle(rocketEngine);
car2.forward();
