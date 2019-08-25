class QNode {
    public value: number;
    public next: QNode;
}

class Queue {
    public head: QNode;
    public tail: QNode;

    public enqueue(value: number): void {
        console.log(`Enqueing: ${value}`)

        const node = new QNode();
        node.value = value;

        if (this.tail == null && this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    public dequeue(): number {
        console.log("Dequeing");

        let iteratingHead = this.head;

        if (iteratingHead != null) {
            this.head = iteratingHead.next;

            if (iteratingHead.next == null) {
                this.tail = null;
            }

            return iteratingHead.value;
        } else {
            console.log("It looks like queue is not initilezed yet.");
            return 0;
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
            console.log("Queue is empty.");
        }

        console.log("---");
    }
}

let q = new Queue();
q.enqueue(11);
q.enqueue(22);
q.enqueue(33);
q.enqueue(44);
q.enqueue(55);

q.printAll();

q.dequeue();
q.dequeue();

q.printAll();

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();

q.printAll();
