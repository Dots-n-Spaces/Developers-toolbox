protocol Propulsion {
    func move()
}

class Vehicle {
    private let engine: Propulsion
    
    init(engine: Propulsion) {
        self.engine = engine
    }
    
    func forward() {
        engine.move()
    }
}

class RaceCarEngine: Propulsion {
    func move() {
        print("Vrrrooooommm!!")
    }
}

class RocketEngine: Propulsion {
    func move() {
        print("3-2-1... LIFT OFF!!!")
    }
}

let raceCarEngine = RaceCarEngine()
let car = Vehicle(engine: raceCarEngine)
car.forward()

let rocketEngine = RocketEngine()
let car2 = Vehicle(engine: rocketEngine)
car2.forward()
