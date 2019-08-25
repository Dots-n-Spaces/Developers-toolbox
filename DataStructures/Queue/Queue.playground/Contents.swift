import Foundation

class QNode {
    var value: Int?
    var next: QNode?
}

class Queue {
    var head: QNode?
    var tail: QNode?
    
    func enqueue(value: Int) {
        print("Enqueing: \(value)")
        
        let node = QNode()
        node.value = value

        if tail == nil && head == nil {
            head = node
            tail = node
        } else {
            tail?.next = node
            tail = node
        }

//        OR
//        if tail == nil {
//            tail = node
//
//            if head == nil {
//                head = tail
//            }
//        }
//        else {
//            tail?.next = node
//            tail = node
//        }
    }
    
    func dequeue() -> Int? {
        print("Dequeing")

        if let iteratingHead = head {
            head = iteratingHead.next

            if iteratingHead.next == nil {
                tail = nil
            }

            return iteratingHead.value
        }
        else {
            print("It looks like queue is not initilezed yet.")
            return nil
        }
    }
    
    func printAll() {
        print("Printing values:")
        
        if var iteratingHead = self.head {
            while iteratingHead.next != nil {
                print(iteratingHead.value ?? 0)
                iteratingHead = iteratingHead.next!
            }
            print(iteratingHead.value ?? 0)
        } else {
            print("Queue is empty.")
        }
        
        print("---")
    }
}

let q = Queue()
q.enqueue(value: 11)
q.enqueue(value: 22)
q.enqueue(value: 33)
q.enqueue(value: 44)
q.enqueue(value: 55)

q.printAll()

q.dequeue()
q.dequeue()

q.printAll()

q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()

q.printAll()
