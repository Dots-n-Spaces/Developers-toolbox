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
