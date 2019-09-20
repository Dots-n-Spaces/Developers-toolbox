// 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

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

console.log("Method 1: Recursive A");
function printKthElementFromTheEnd1A(head: LinkedListNode, k: number): number {

    if (head === undefined) {
        return 0;
    }

    const index = printKthElementFromTheEnd1A(head.next, k) + 1;

    if (index === k) {
        console.log(head.value);
    }

    return index;
}
printKthElementFromTheEnd1A(list.head, 5); //77


console.log("Method 1: Recursive B");
class Index {
    public value = 0;
}

function printKthElementFromTheEnd1B(head: LinkedListNode, k: number): void {
    const idx = new Index();
    console.log(kToLast(head, k, idx).value);
}

function kToLast(head: LinkedListNode, k: number, idx: Index): LinkedListNode {
    if (head === undefined) {
        return undefined;
    }

    const node = kToLast(head.next, k, idx);
    idx.value = idx.value + 1;

    if (idx.value === k) {
        return head;
    }

    return node;
}

printKthElementFromTheEnd1B(list.head, 5); //77


console.log("Method 2: Iterative");
function printKthElementFromTheEnd2(head: LinkedListNode, k: number): void {
    let current = head;
    let runner = head;

    for (let i = 0; i < k; i++) {
        runner = runner.next;
    }

    while (runner !== undefined) {
        runner = runner.next;
        current = current.next;
    }

    console.log(current.value);
}
printKthElementFromTheEnd2(list.head, 5); //77