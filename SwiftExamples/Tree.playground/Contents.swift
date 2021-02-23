class Node {
    var value: Int?
    var left: Node?
    var right: Node?
}

class Tree {
    var root: Node?

    func insert(value: Int) {
        guard let rootNode = root else {
            let node = Node()
            node.value = value

            root = node
            return
        }

        insert(value: value, node: rootNode)
    }

    func insert(value: Int, node: Node) {
        let newNode = Node()
        newNode.value = value

        if let nodeVal = node.value {
            if value > nodeVal {
                if let righNodeVal = node.right {
                    insert(value: value, node: righNodeVal)
                } else {
                    node.right = newNode
                }
            } else {
                if let leftNodeVal = node.left {
                    insert(value: value, node: leftNodeVal)
                } else {
                    node.left = newNode
                }
            }
        } else {
            print("Fuck")
        }
    }

    func preoreder() {
        guard let rootNode = root else {
            print("Empty")
            return
        }

        preorder(node: rootNode)
    }

    func preorder(node: Node) {
        if let nodeVal = node.value {
            print(nodeVal)
        }

        if let leftNode = node.left {
            preorder(node: leftNode)
        }

        if let rightNode = node.right {
            preorder(node: rightNode)
        }
    }

    func inorder() {
        guard let rootNode = root else {
            print("Empty")
            return
        }

        preorder(node: rootNode)
    }

    func inorder(node: Node) {
        if let leftNode = node.left {
            preorder(node: leftNode)
        }

        if let nodeVal = node.value {
            print(nodeVal)
        }

        if let rightNode = node.right {
            preorder(node: rightNode)
        }
    }
    
    func postorder() {
        guard let rootNode = root else {
            print("Empty")
            return
        }
        
        postorder(node: rootNode)
    }
    
    func postorder(node: Node) {
        if let leftNode = node.left {
            postorder(node: leftNode)
        }
        
        if let rightNode = node.right {
            postorder(node: rightNode)
        }
        
        if let nodeVal = node.value {
            print(nodeVal)
        }
    }

    func remove(val: Int) {
        guard let rootNode = root else {
            print("Empty")
            return
        }

        remove(val: val, node: rootNode)
    }

    func remove(val: Int, node: Node) {
        if node.value != nil {
            if let leftNode = node.left, let leftVal = leftNode.value, leftVal == val {

            }
        }
    }
}

let tree = Tree()
tree.insert(value: 11)
tree.insert(value: 22)
tree.insert(value: 33)
tree.insert(value: 44)
tree.insert(value: 55)
tree.insert(value: 66)
tree.insert(value: 77)

//print("------------")
//tree.preoreder()
//print("------------")
//tree.inorder()
//print("------------")
//tree.postorder()
//print("------------")


tree.remove(val: 66)

tree.inorder()
