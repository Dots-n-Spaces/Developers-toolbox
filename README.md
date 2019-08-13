# Developers-toolbox
Toolbox of software design pattern, algorithms and typical problems

# Creational
## 🏭 Factory Method
The factory pattern is used to replace class constructors, abstracting the process of object generation so that the type of the object instantiated can be determined at run-time.

Wikipedia says
> In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

<details>
	
Real world example
> Consider the case of currency creation. Where we want to create a currency object depending on the country.


### Swift

**Example:**
```swift
enum Country {
    case italy, spain, denmark, ukraine, usa
}

protocol Currency {
    func getFlag() -> String
    func getSymbol() -> String
}

// Defining currencies based on protocol
class Euro: Currency {
    func getFlag() -> String {
        return "🇪🇺"
    }

    func getSymbol() -> String {
        return "€"
    }
}

class Krona: Currency {
    func getFlag() -> String {
        return "🇩🇰"
    }

    func getSymbol() -> String {
        return "DKK"
    }
}

class Hryvnia: Currency {
    func getFlag() -> String {
        return "🇺🇦"
    }

    func getSymbol() -> String {
        return "₴"
    }
}

class Dollar: Currency {
    func getFlag() -> String {
        return "🇺🇸"
    }

    func getSymbol() -> String {
        return "$"
    }
}

// Defining factory itself
class CurrencyFactory {
    static func make(currencyFor country: Country) -> Currency {
        switch country {
        case .spain, .italy:
            return Euro()
        case .denmark:
            return Krona()
        case .ukraine:
            return Hryvnia()
        case .usa:
            return Dollar()
        }
    }
}

let currency1 = CurrencyFactory.make(currencyFor: .ukraine)
print("\(currency1.getFlag()) \(currency1.getSymbol())")

let currency2 = CurrencyFactory.make(currencyFor: .spain)
print("\(currency2.getFlag()) \(currency2.getSymbol())")
```

```
🇺🇦 ₴
🇪🇺 €
```

### TypeScript
**Example:**
[jsfiddle link](https://jsfiddle.net/r69ubmvh/)

```typescript
enum Country {
    italy = 0,
    spain, denmark, ukraine, usa
}

interface Currency {
    getFlag(): String;
    getSymbol(): String;
}

// Defining currencies based on protocol
class Euro implements Currency {
    public getFlag(): String {
        return "🇪🇺"
    }

    public getSymbol(): String {
        return "€"
    }
}

class Krona implements Currency {
    getFlag(): String {
        return "🇩🇰"
    }

    public getSymbol(): String {
        return "DKK"
    }
}

class Hryvnia implements Currency {
    getFlag(): String {
        return "🇺🇦"
    }

    public getSymbol(): String {
        return "₴"
    }
}

class Dolar implements Currency {
    getFlag(): String {
        return "🇺🇸"
    }

    public getSymbol(): String {
        return "$"
    }
}

// Defining factory itself
class CurrencyFactory {
    public static make(currencyForCountry: Country): Currency {
        switch (currencyForCountry) {
            case Country.spain, Country.italy:
                return new Euro();
            case Country.denmark:
                return new Krona();
            case Country.ukraine:
                return new Hryvnia();
            case Country.usa:
                return new Dolar();
        }
    }
}

let currency1 = CurrencyFactory.make(Country.ukraine);
console.log(`${currency1.getFlag()} ${currency1.getSymbol()}`);

let currency2 = CurrencyFactory.make(Country.denmark);
console.log(`${currency2.getFlag()} ${currency2.getSymbol()}`);
```

```
🇺🇦 ₴
🇩🇰 DKK
```

</details>

## 🍾 Singleton
Ensures a class has only one instance and provides a global point of access to it. Use cases: provide a unified access point to a resource or service that’s shared across an app/service, like an audio channel to play sound effects or a network manager to make HTTP requests.

Wikipedia says
> In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

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
