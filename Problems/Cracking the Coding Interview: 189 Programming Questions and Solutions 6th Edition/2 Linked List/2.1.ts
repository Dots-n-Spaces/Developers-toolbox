// 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.

import { LinkedList, LinkedListNode } from "../../../DataStructures/LinkedList/LinkedList";

let list = new LinkedList();
list.insert(22);
list.insert(33);
list.insert(55);
list.insert(44);
list.insert(55);
list.insert(66);
list.insert(66);
list.insert(77);
list.insert(88);
list.insert(88);
list.insert(88);
list.insert(88);
list.printAll();

function removeDuplicates1(head: LinkedListNode): void {
    const map: boolean[] = [];
    let previous: LinkedListNode;

    while (head !== undefined) {
        if (map[head.value] !== undefined) {
            previous.next = head.next;
        } else {
            map[head.value] = true;
            previous = head;
        }

        head = head.next;
    }
}

removeDuplicates1(list.head);

list.printAll();


// How would you solve this problem if a temporary buffer is not allowed?
console.log("Follow up");

list = new LinkedList();
list.insert(22);
list.insert(33);
list.insert(55);
list.insert(44);
list.insert(55);
list.insert(66);
list.insert(66);
list.insert(77);
list.insert(88);
list.insert(88);
list.insert(88);
list.insert(88);
list.printAll();

function removeDuplicates2(head: LinkedListNode): void {
    let current = head;

    while (current !== undefined) {
        let runner = current;

        while (runner.next !== undefined) {
            if (runner.next.value === current.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }

        current = current.next;
    }
}

removeDuplicates2(list.head);

list.printAll();