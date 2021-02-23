// Define a template method that contains a skeleton of some algorithm, composed of calls to (usually) primitive operations.
class TreeColorFlag {
    // The template method defines the skeleton of an algorithm.
    draw(): void {
        this.log("Starting drawing");

        this.drawFirstPart();
        this.log("First part is done.");

        this.drawSecondPart();
        this.log("Second part is done.");

        this.drawThirdPart();
        this.log("Third part is done.");
    }

    log(message: String): void {
        console.log(message);
    }

    // These operations have to be implemented in subclasses.
    drawFirstPart(): void {
        throw new Error("Subclass must implement drawFirstPart");
    }

    drawSecondPart(): void {
        throw new Error("Subclass must implement drawSecondPart");
    }

    drawThirdPart(): void {
        throw new Error("Subclass must implement drawThirdPart");
    }
}

// Concrete classes have to implement all needed operations of the base
// class. They can also override some operations with a default implementation.
class FrenchFlag extends TreeColorFlag {
    drawFirstPart(): void {
        console.log("FrenchFlag says: Implemented Operation1");
    }

    drawSecondPart(): void {
        console.log("FrenchFlag says: Implemented drawSecondPart");
    }

    drawThirdPart(): void {
        console.log("FrenchFlag says: Implemented drawThirdPart");
    }
}

class GermanFlag extends TreeColorFlag {
    drawFirstPart(): void {
        console.log("FrenchFlag says: Implemented Operation1");
    }

    drawSecondPart(): void {
        console.log("FrenchFlag says: Implemented drawSecondPart");
    }

    drawThirdPart(): void {
        console.log("FrenchFlag says: Implemented drawThirdPart");
    }
}

console.log("Drawing French 🇫🇷 flag");
new FrenchFlag().draw();

console.log("Drawing German 🇩🇪 flag");
new GermanFlag().draw();
