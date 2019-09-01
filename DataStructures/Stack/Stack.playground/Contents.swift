class Stack {
    var stackArray = [String]()
    
    func push(val: String) {
        self.stackArray.append(val)
    }
    
    func pop() -> String? {
        if self.stackArray.last != nil {
            return self.stackArray.removeLast()
        }
        else{
            return "Stack is empty."
        }
    }
    
    func printValues() {
        print(stackArray)
    }
}

let stack = Stack()
stack.push(val: "1")
stack.push(val: "2")
stack.push(val: "2")
stack.push(val: "2")
stack.push(val: "3")
stack.push(val: "2")
stack.push(val: "1")

stack.printValues()

print(stack.pop() as Any)
print(stack.pop() as Any)

stack.printValues()

print(stack.pop() as Any)
print(stack.pop() as Any)
print(stack.pop() as Any)
print(stack.pop() as Any)
print(stack.pop() as Any)
print(stack.pop() as Any)
