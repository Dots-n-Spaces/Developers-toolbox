namespace SingletonPattern {
    export class Singleton {
        // A variable which stores the singleton object.
        // Initially, the variable acts like a placeholder
        private static sharedInstance: Singleton;

        public id: number;

        // Private initialization to ensure just one instance is created.
        private constructor() {
            console.log("Initialized.");
            this.id = Math.random();
        }

        // This is how we create a singleton object
        public static getInstance(): Singleton {
            // Check if an instance of the class is already created.
            if (!Singleton.sharedInstance) {
                // If not created create an instance of the class, and store the instance in the variable
                Singleton.sharedInstance = new Singleton();
            }
            // return the singleton object
            return Singleton.sharedInstance;
        }

        public sayHi(): void {
            console.log("Hi!");
        }
    }
}

const instance1 = SingletonPattern.Singleton.getInstance();
instance1.sayHi();
console.log(instance1.id);

const instance2 = SingletonPattern.Singleton.getInstance();
console.log(instance2.id);

//However, js gives you ability to do next:
console.log("🤔");
// const test1 = new SingletonPattern.Singleton();
// console.log(test1.id);
// test1.sayHi();

// const test2 = new SingletonPattern.Singleton();
// console.log(test2.id);
// test1.sayHi();
