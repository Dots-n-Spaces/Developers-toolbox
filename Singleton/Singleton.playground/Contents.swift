// final prevents class to be subclassed.
final class Singleton {
    // A variable which stores the singleton object.
    // On initialization This is how we create a singleton object.
    static let sharedInstance = Singleton()

    // Private initialization to ensure just one instance is created.
    private init() {
        print("Initialized.")
    }
    
    func sayHi() {
        print("Hi!")
    }
}

let instance = Singleton.sharedInstance
instance.sayHi()

// Next line will fail
Singleton()
