class TreeNode<T> {
    public var value: T
    public var parent: TreeNode?
    public var children = [TreeNode<T>]()
    
    init(value: T) {
        self.value = value
    }
    
    public func addChild(node: TreeNode<T>) {
        children.append(node)
        node.parent = self
    }
    
    public func printAll() {
        print(value)
    
        children.forEach { node in
            node.printAll()
        }
    }
}

let tree = TreeNode(value: "root")
let black = TreeNode(value: "black")
let red = TreeNode(value: "red")
let blue = TreeNode(value: "blue")
let yellow = TreeNode(value: "yellow")
let white = TreeNode(value: "white")
let pink = TreeNode(value: "pink")

tree.addChild(node: black)
tree.addChild(node: blue)
tree.addChild(node: pink)

black.addChild(node: red)
black.addChild(node: yellow)

red.addChild(node: white)

tree.printAll()
