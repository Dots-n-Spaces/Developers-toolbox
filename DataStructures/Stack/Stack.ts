class Stack {
    private stackArray: string[] = [];

    public push(val: string): void {
        this.stackArray.push(val);
    }

    public pop(): string {
        if (this.stackArray.length !== 0) {
            return this.stackArray.splice(this.stackArray.length-1, 1)[0];
        }
        else{
            return "Stack is empty";
        }
    }

    public printValues(): void {
        console.log(this.stackArray);
    }
}

let stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("2");
stack.push("2");
stack.push("3");
stack.push("2");
stack.push("1");

stack.printValues();

console.log(stack.pop());
console.log(stack.pop());

stack.printValues();

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());