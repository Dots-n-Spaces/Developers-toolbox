// Adaptee: SocketDenmark contains some useful behavior, but it is incompatible
// with the existing LaptopUS. The SocketDenmark needs some adaptation before the
// LaptopUS can use it.
// 🇩🇰 socket
class SocketDenmark {
    public forbinde(): void {
        //connect in Danish
        console.log("Adapee: Forbundet."); // connected in Danish
    }
}

// Target: SocketUS defines the domain-specific implementation.
class SocketUS {
    public connect(): void {
        console.log("Target: Connected.");
    }
}

/// Adapter: makes SocketDenmark compatible with the SocketUS.
// 🇺🇸 plug to 🇩🇰 socket adapter.
class Adapter extends SocketUS {
    private adaptee: SocketDenmark;

    constructor(adaptee: SocketDenmark) {
        super();

        this.adaptee = adaptee;
    }

    public connect(): void {
        console.log("Adapter: Connecting...");
        this.adaptee.forbinde();
        console.log("Adapter: Connected.");
    }
}

// Client: uses Adapter.
// Laptop with 🇺🇸 plug
class LaptopUS {
    static connectUSPlugToElectricity(socket: SocketUS): void {
        console.log(socket.connect());
    }
}

LaptopUS.connectUSPlugToElectricity(new SocketUS());
LaptopUS.connectUSPlugToElectricity(new Adapter(new SocketDenmark()));
