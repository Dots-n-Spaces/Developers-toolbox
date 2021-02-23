class BinaryMinHeap {
    public values: number[] = [];

    public insert(val: number): void {
        if (this.values.length === 0) {
            this.values[0] = val;
        } else {
            this.values.push(val);
            this.bubbleUp();
        }
    }

    private bubbleUp(): void {
        let index = this.values.length - 1;

        let parentIndex = Math.floor((index - 1) / 2);
        let temp;

        // Keep looping until the parent node is less than the child node
        while (parentIndex >= 0 && this.values[parentIndex] > this.values[index]) {
            temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;

            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    public extractMin(): number {
        if (this.values.length != 0) {
            const min = this.values[0];
            const end = this.values[this.values.length - 1];
            this.values.splice(this.values.length - 1, 1);

            if (this.values.length > 0) {
                this.values[0] = end;
                this.sinkDown();
            }

            return min;
        } else {
            return 0;
        }
    }

    private sinkDown(): void {
        let parentIdx = 0;
        let leftChildIdx = 0;
        let rightChildIdx = 0;
        let heapLength = this.values.length;

        let nodeToSink = this.values[parentIdx];
        let idxToSwap = 0;
        let swap = false;
        // Keep looping through the nodes util you find the right spot
        while (true) {
            leftChildIdx = 2 * parentIdx + 1;
            rightChildIdx = 2 * parentIdx + 2;

            swap = false;
            let leftChild = null;
            let rightChild = null;

            // Check with the left child only if it is a valid index
            if (leftChildIdx < heapLength) {
                leftChild = this.values[leftChildIdx];
                // Compare with the node to sink down
                if (nodeToSink > leftChild) {
                    idxToSwap = leftChildIdx;
                    swap = true;
                }
            }

            // Check with the right child only if it is a valid index
            if (rightChildIdx < heapLength) {
                rightChild = this.values[rightChildIdx];

                if ((swap && leftChild > rightChild) || (!swap && nodeToSink > rightChild)) {
                    idxToSwap = rightChildIdx;
                    swap = true;
                }
            }

            if (!swap) {
                // If there is no swap required, we found the correct spot for the element
                return;
            } else {
                // Swap the elements
                this.values[parentIdx] = this.values[idxToSwap];
                this.values[idxToSwap] = nodeToSink;

                // Set the reference to index to its new value
                parentIdx = idxToSwap;
            }
        }
    }

    public printAll(): void {
        console.log(this.values);
    }
}

const mbh = new BinaryMinHeap();
mbh.insert(2);
mbh.insert(7);
mbh.insert(1);
mbh.insert(0);
mbh.insert(12);
mbh.insert(20);
mbh.insert(25);
mbh.insert(5);
mbh.insert(4);

mbh.printAll();

console.log(mbh.extractMin());
console.log(mbh.extractMin());
console.log(mbh.extractMin());
mbh.printAll();
