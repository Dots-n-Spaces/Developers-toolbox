export class LinkedListNode {
    public value: number;
    public next: LinkedListNode;
}

export class LinkedList {
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
