# Developers-toolbox
Toolbox of software design pattern, algorithms and typical problems

# Creational
## 💍 Singleton
Ensures a class has only one instance and provides a global point of access to it. Use cases: provide a unified access point to a resource or service that’s shared across an app/service, like an audio channel to play sound effects or a network manager to make HTTP requests.

<details>

### Swift

**Example:**
```swift
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
```

```
Initialized.
Hi!
```

```
// Next line will fail
Singleton()
```

```
error: Singleton.playground:21:1: error: 'Singleton' initializer is inaccessible due to 'private' protection level
Singleton()
^

Singleton.playground:8:13: note: 'init()' declared here
    private init() {
            ^
```

### TypeScript
**Example:**
[jsfiddle link](https://jsfiddle.net/6ekmdvn1/)

```typescript
namespace SingletonPattern {
    export class Singleton {
        // A variable which stores the singleton object.
        // Initially, the variable acts like a placeholder
        private static sharedInstance: Singleton;

        public id: number;

        // Private initialization to ensure just one instance is created.
        private constructor() {
	        console.log("Initialized.")
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
```

```
[Log] Initialized.
[Log] Hi!
[Log] 0.32110868008151106
[Log] 0.32110868008151106
```

```
//However, js gives you ability to do next:
console.log("🤔")
const test1 = new SingletonPattern.Singleton();
console.log(test1.id);
test1.sayHi();

const test2 = new SingletonPattern.Singleton();
console.log(test2.id);
test1.sayHi();
```

```
[Log] 🤔
[Log] Initialized.
[Log] 0.9238042630755623
[Log] Hi!
[Log] Initialized.
[Log] 0.8771180249127926
[Log] Hi!
```

</details>


### Inspired by:
- https://github.com/kamranahmedse/design-patterns-for-humans
- https://github.com/DovAmir/awesome-design-patterns
- https://github.com/torokmark/design_patterns_in_typescript
- https://github.com/VanHakobyan/DesignPatterns
- https://github.com/ochococo/Design-Patterns-In-Swift
- https://github.com/abishekaditya/DesignPatterns
- https://github.com/nslocum/design-patterns-in-ruby
- https://github.com/rust-unofficial/patterns
- https://github.com/tcorral/Design-Patterns-in-Javascript
