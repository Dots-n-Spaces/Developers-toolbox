// Define a template method that contains a skeleton of some algorithm, composed of calls to (usually) primitive operations.
protocol TreeColorFlag {
    
    // The template method defines the skeleton of an algorithm.
    func draw()
    
    // These operations have to be implemented in subclasses.
    func drawFirstPart()
    func drawSecondPart()
    func drawThirdPart()
}

extension TreeColorFlag {

    func draw() {
        log(message: "Starting drawing")
        drawFirstPart();
        log(message: "First part is done.")
        drawSecondPart();
        log(message: "Second part is done.")
        drawThirdPart();
        log(message: "Third part is done.")
    }
    
    func log(message: String) {
        print(message)
    }
    
    func drawFirstPart() {
        fatalError("Subclass must implement drawFirstPart")
    }
    
    func drawSecondPart() {
        fatalError("Subclass must implement drawSecondPart")
    }
    
    func drawThirdPart() {
        fatalError("Subclass must implement drawThirdPart")
    }
}

// Concrete classes have to implement all needed operations of the base
// class. They can also override some operations with a default implementation.
class FrenchFlag: TreeColorFlag {
    func drawFirstPart() {
        print("FrenchFlag says: Implemented Operation1")
    }
    
    func drawSecondPart() {
        print("FrenchFlag says: Implemented drawSecondPart")
    }
    
    func drawThirdPart() {
        print("FrenchFlag says: Implemented drawThirdPart")
    }
}

class GermanFlag: TreeColorFlag {
    func drawFirstPart() {
        print("FrenchFlag says: Implemented Operation1")
    }
    
    func drawSecondPart() {
        print("FrenchFlag says: Implemented drawSecondPart")
    }
    
    func drawThirdPart() {
        print("FrenchFlag says: Implemented drawThirdPart")
    }
}

print("Drawing French 🇫🇷 flag")
FrenchFlag().draw()

print("Drawing German 🇩🇪 flag")
GermanFlag().draw()
