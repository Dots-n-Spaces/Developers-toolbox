# Developers-toolbox
Toolbox of software design pattern, algorithms and typical problems. Part of Develepor's toolbox series: [link](https://medium.com/dots-and-spaces).

# Design patterns
## Structural
### 🔌 Adapter
Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.

Wikipedia says:
> In software engineering, the adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.

<details>

#### Real world example
> Consider that you have some pictures in your memory card and you need to transfer them to your computer. In order to transfer them you need some kind of adapter that is compatible with your computer ports so that you can attach memory card to your computer. In this case card reader is an adapter.

> Yet another example would be a translator translating words spoken by one person to another

#### Demo example
> Power adapter: a two pronged legged US plug can't be connected to an EU outlet, it needs to use a power adapter.

##### Swift
```swift
// Adaptee: SocketDenmark contains some useful behavior, but it is incompatible
// with the existing LaptopUS. The SocketDenmark needs some adaptation before the
// LaptopUS can use it.
// 🇩🇰 socket
class SocketDenmark {
    public func forbinde() { //connect in Danish
        print("Adapee: Forbundet.") // connected in Danish
    }
}

// Target: SocketUS defines the domain-specific implementation.
class SocketUS {
    func connect() {
        print("Target: Connected.")
    }
}

/// Adapter: makes SocketDenmark compatible with the SocketUS.
// 🇺🇸 plug to 🇩🇰 socket adapter.
class Adapter: SocketUS {
    private var SocketDenmark: SocketDenmark

    init(_ SocketDenmark: SocketDenmark) {
        self.SocketDenmark = SocketDenmark
    }

    override func connect() {
        print("Adapter: Connecting...")
        SocketDenmark.forbinde()
        print("Adapter: Connected.")
    }
}

// Client: uses Adapter.
// Laptop with 🇺🇸 plug
class LaptopUS {
    static func connectUSPlugToElectricity(socket: SocketUS) {
        print(socket.connect())
    }
}

LaptopUS.connectUSPlugToElectricity(socket: SocketUS())
LaptopUS.connectUSPlugToElectricity(socket: Adapter(SocketDenmark()))
```
##### Output:
```
Target: Connected.

Adapter: Connecting...
Adapee: Forbundet.
Adapter: Connected.
```

#### TypeScript
[jsfiddle link](https://jsfiddle.net/skrLme5w/)
```typescript
// Adaptee: SocketDenmark contains some useful behavior, but it is incompatible
// with the existing LaptopUS. The SocketDenmark needs some adaptation before the
// LaptopUS can use it.
// 🇩🇰 socket
class SocketDenmark {
    public forbinde(): void { //connect in Danish
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
```
##### Output:
```
Target: Connected.

Adapter: Connecting...
Adapee: Forbundet.
Adapter: Connected.
```

</details>

### 🎁 Façade
The facade pattern is used to define a simplified interface to a more complex subsystem.

Wikipedia says:
> Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

<details>

##### Swift
```swift
final class SystemA {
    public func veryBigMethod() {
        print("veryBigMethod of SystemA");
    }
}

final class SystemB {
    public func veryImportantMethod() {
        print("veryImportantMethod of SystemB");
    }
}

final class SystemC {
    public func veryDifficultMethod() {
        print("veryDifficultMethod of SystemC");
    }
}

class Facade {
    private let a = SystemA()
    private let b = SystemB()
    private let c = SystemC()

    public func runBigAndImportantStuff() {
        print("-- runBigAndImportantStuff started --")
        self.a.veryBigMethod()
        self.b.veryImportantMethod()
        print("-- runBigAndImportantStuff is done --")
    }

    public func  runBigAndDifficultStuff() {
        print("-- runBigAndDifficultStuff started --")
        self.a.veryBigMethod()
        self.c.veryDifficultMethod()
        print("-- runBigAndDifficultStuff is done --")
    }
}

let facade = Facade()
facade.runBigAndImportantStuff()
facade.runBigAndDifficultStuff()
```
##### Output:
```
-- runBigAndImportantStuff started --
veryBigMethod of SystemA
veryImportantMethod of SystemB
-- runBigAndImportantStuff is done --

-- runBigAndDifficultStuff started --
veryBigMethod of SystemA
veryDifficultMethod of SystemC
-- runBigAndDifficultStuff is done --

```

#### TypeScript
[jsfiddle link](https://jsfiddle.net/L06utyb8/)
```typescript
namespace FacadePattern {
    export class SystemA {
        public veryBigMethod(): void {
            console.log("veryBigMethod of SystemA");
        }
    }

    export class SystemB {
        public veryImportantMethod(): void {
            console.log("veryImportantMethod of SystemB");
        }
    }

    export class SystemC {
        public veryDifficultMethod(): void {
            console.log("veryDifficultMethod of SystemC");
        }
    }

    export class Facade {
        private a = new SystemA();
        private b = new SystemB();
        private c = new SystemC();

        public runBigAndImportantStuff(): void {
            console.log(`-- runBigAndImportantStuff started --`);
            this.a.veryBigMethod();
            this.b.veryImportantMethod();
            console.log(`-- runBigAndImportantStuff is done --`);
        }

        public runBigAndDifficultStuff(): void {
            console.log(`-- runBigAndDifficultStuff started --`);
            this.a.veryBigMethod();
            this.c.veryDifficultMethod();
            console.log(`-- runBigAndDifficultStuff is done --`);
        }
    }
}

const facade = new FacadePattern.Facade();
facade.runBigAndImportantStuff();
facade.runBigAndDifficultStuff();
```
##### Output:
```
-- runBigAndImportantStuff started --
veryBigMethod of SystemA
veryImportantMethod of SystemB
-- runBigAndImportantStuff is done --

-- runBigAndDifficultStuff started --
veryBigMethod of SystemA
veryDifficultMethod of SystemC
-- runBigAndDifficultStuff is done --
```

</details>

## Creational
### 🏭 Factory Method
The factory pattern is used to replace class constructors, abstracting the process of object generation so that the type of the object instantiated can be determined at run-time.

Wikipedia says:
> In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

<details>

#### Demo example
> Consider the case of currency creation. Where we want to create a currency object depending on the country.

#### Swift

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
##### Output:
```
🇺🇦 ₴
🇪🇺 €
```

#### TypeScript
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
##### Output:
```
🇺🇦 ₴
🇩🇰 DKK
```

</details>

### 🍾 Singleton
Ensures a class has only one instance and provides a global point of access to it. Use cases: provide a unified access point to a resource or service that’s shared across an app/service, like an audio channel to play sound effects or a network manager to make HTTP requests.

Wikipedia says:
> In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

<details>

#### Real world example
> All database queries should be executed through only one connection.

> I/O to a memorry should be through one channel.

#### Demo example
> Say hi must be told only in one way through one instance.

#### Swift

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
##### Output:
```
Initialized.
Hi!
```

```
// Next line will fail
Singleton()
```
##### Output:
```
error: Singleton.playground:21:1: error: 'Singleton' initializer is inaccessible due to 'private' protection level
Singleton()
^

Singleton.playground:8:13: note: 'init()' declared here
    private init() {
            ^
```

#### TypeScript
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
##### Output:
```
Initialized.
Hi!
0.32110868008151106
0.32110868008151106
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

##### Output:
```
🤔
Initialized.
0.9238042630755623
Hi!
Initialized.
0.8771180249127926
Hi!
```

</details>

## Data Structures
### Linked List

[Wikipedia says](https://en.wikipedia.org/wiki/Linked_list):
> In computer science, a Linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration

| Data Structure       | Insert | Delete | Balance | Get at index | Search | Find minimum | Find maximum | Space usage |
| -------------------- |-------:| ------:|--------:|-------------:|-------:|-------------:|-------------:|------------:|
| Unsorted linked list | O(1) | O(1)     | N/A     | O(n)         | O(n)   | O(n)         | O(n)         | O(n)        |
| Sorted linked list   | O(n) | O(1)     | N/A     | O(n)         | O(n)   | O(1)         | O(1)         | O(n)        |

<details>

#### Real world example
> Consider the history section of web browsers, where it creates a linked list of web-pages visited, so that when you check history (traversal of a list) or press back button, the previous node's data is fetched.

> Another real life example could a be queue/line of persons standing for food in mess, insertion is done at one end and deletion at other. And these operations happen frequent. dynamic queues / stacks are efficiently implemented using linked lists.

#### Swift

**Example:**
```swift
class Node {
    var value: Int?
    var next: Node?
}

class LinkedList {
    var head: Node?

    func insert(value: Int) {
        print("Inserting: \(value)")

        if var iteratingHead = self.head {
            while(iteratingHead.next != nil) {
                iteratingHead = iteratingHead.next!
            }

            iteratingHead.next = Node()
            iteratingHead.next?.value = value
        }
        else {
            self.head = Node()
            self.head?.value = value
        }
    }

    func remove(value: Int) {
        print("Removing: \(value)")

        if var iteratingHead = self.head {
            var lastNode = self.head!
            while(iteratingHead.value != value && iteratingHead.next != nil) {
                lastNode = iteratingHead
                iteratingHead = iteratingHead.next!
            }

            if iteratingHead.value == value {
                if iteratingHead.next != nil {
                    lastNode.value = nil
                    lastNode.next = iteratingHead.next
                }
                else {
                    lastNode.next = nil
                }
            }
        }
        else {
            print("It looks like list is not initilezed yet.")
        }
    }

    func printAll() {
        print("Printing values:")

        if var iteratingHead = head {
            while(iteratingHead.next != nil) {
                print(iteratingHead.value ?? 0)

                iteratingHead = iteratingHead.next!
            }

            print(iteratingHead.value ?? 0)
        } else {
            print("List is empty.")
        }

        print("---")
    }
}

var list = LinkedList()
list.printAll()

list.insert(value: 22)
list.insert(value: 33)
list.insert(value: 44)
list.insert(value: 55)
list.insert(value: 66)

list.printAll()

list.remove(value: 33)
list.remove(value: 66)

list.printAll()

list.remove(value: 22)
list.remove(value: 44)
list.remove(value: 55)
list.remove(value: 66)

list.printAll()

```

##### Output:
```
Printing values:
List is empty.
---
Inserting: 22
Inserting: 33
Inserting: 44
Inserting: 55
Inserting: 66
Printing values:
22
33
44
55
66
---
Removing: 33
Removing: 66
Printing values:
44
55
66
---
Removing: 22
Removing: 44
Removing: 55
Removing: 66
Printing values:
---
```

#### TypeScript
**Example:**
[jsfiddle link](https://jsfiddle.net/Lvxj67hz/)

```typescript
class LinkedListNode {
    public value: number;
    public next: LinkedListNode;
}

class LinkedList {
    public head: LinkedListNode;

    public insert(value: number): void {
        console.log(`Inserting: ${value}`);

        let iteratingHead = this.head;

        if (iteratingHead != null) {
            while (iteratingHead.next != null) {
                iteratingHead = iteratingHead.next;
            }

            iteratingHead.next = new LinkedListNode();
            iteratingHead.next.value = value;
        } else {
            this.head = new LinkedListNode();
            this.head.value = value;
        }
    }

    public remove(value: number): void {
        console.log(`Removing: ${value}`);

        let iteratingHead = this.head;

        if (iteratingHead != null) {
            let lastNode = iteratingHead;

            while (iteratingHead.next != null && iteratingHead.next.value === value) {
                lastNode = iteratingHead;
                iteratingHead = iteratingHead.next;
            }

            if (iteratingHead.value === value) {
                if (iteratingHead.next != null) {
                    lastNode.value = null;
                    lastNode.next = iteratingHead.next;
                } else {
                    lastNode.next = null;
                }
            }
        } else {
            console.log("It looks like list is not initilezed yet.");
        }
    }

    public printAll(): void {
        console.log("Printing values:");

        let iteratingHead = this.head;

        if (iteratingHead != null) {
            while (iteratingHead.next != null) {
                if (iteratingHead.value != null) {
                    console.log(iteratingHead.value);
                }

                iteratingHead = iteratingHead.next;
            }

            if (iteratingHead.value != null) {
                console.log(iteratingHead.value);
            }
        } else {
            console.log("List is empty.");
        }

        console.log("---");
    }
}

const list = new LinkedList();
list.printAll();

list.insert(22);
list.insert(33);
list.insert(44);
list.insert(55);
list.insert(66);

list.printAll();

list.remove(33);
list.remove(66);

list.printAll();

list.remove(22);
list.remove(44);
list.remove(55);
list.remove(66);

list.printAll();
```

##### Output:
```
Printing values:
List is empty.
---
Inserting: 22
Inserting: 33
Inserting: 44
Inserting: 55
Inserting: 66
Printing values:
22
33
44
55
66
---
Removing: 33
Removing: 66
Printing values:
44
55
66
---
Removing: 22
Removing: 44
Removing: 55
Removing: 66
Printing values:
---
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


Made with ❤️ by [Dots and Spaces](http://dots-n-spaces.com).