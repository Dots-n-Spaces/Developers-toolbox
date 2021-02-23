class TNode {
    public val: number;
    public left: TNode;
    public right: TNode;
}

class BinarySearchTree {
    public root: TNode = null;

    public addChild(val: number): void {
        const newNode = new TNode();
        newNode.val = val;

        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            let traversing = true;

            while (traversing) {
                if (currentNode.val < newNode.val) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        traversing = false;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (currentNode.val > newNode.val) {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        traversing = false;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    public preOrder(): void {
        console.log("preOrder");
        if (this.root != null) {
            let numbers: number[] = [];
            let currentNode = this.root;

            const traverse = (currentNode: TNode) => {
                if (currentNode != null) {
                    numbers.push(currentNode.val);
                    traverse(currentNode.left);
                    traverse(currentNode.right);
                }
            };

            traverse(this.root);

            console.log(numbers);
        } else {
            console.log("Tree is empty");
        }
    }

    public inOrder(): void {
        console.log("inOrder");
        if (this.root != null) {
            let numbers: number[] = [];
            let currentNode = this.root;

            const traverse = (currentNode: TNode) => {
                if (currentNode != null) {
                    traverse(currentNode.left);
                    numbers.push(currentNode.val);
                    traverse(currentNode.right);
                }
            };

            traverse(this.root);

            console.log(numbers);
        } else {
            console.log("Tree is empty");
        }
    }

    public postOrder(): void {
        console.log("postOrder");
        if (this.root != null) {
            let numbers: number[] = [];
            let currentNode = this.root;

            const traverse = (currentNode: TNode) => {
                if (currentNode != null) {
                    traverse(currentNode.left);
                    traverse(currentNode.right);
                    numbers.push(currentNode.val);
                }
            };

            traverse(this.root);

            console.log(numbers);
        } else {
            console.log("Tree is empty");
        }
    }

    public breadthFirstSearchTraversal(): void {
        console.log("breadthFirstSearchTraversal");
        if (this.root != null) {
            let numbers: number[] = [];
            let qOfNextItems = [this.root];

            while (qOfNextItems.length !== 0) {
                const currentNode = qOfNextItems[0];

                numbers.push(currentNode.val);

                if (currentNode.left != null) {
                    qOfNextItems.push(currentNode.left);
                }
                if (currentNode.right != null) {
                    qOfNextItems.push(currentNode.right);
                }

                qOfNextItems.splice(0, 1);
            }

            console.log(numbers);
        } else {
            console.log("Tree is empty");
        }
    }
}

const bst = new BinarySearchTree();
bst.addChild(10);
bst.addChild(3);
bst.addChild(0);
bst.addChild(8);
bst.addChild(6);
bst.addChild(15);
bst.addChild(11);
bst.addChild(20);

bst.preOrder();
bst.inOrder();
bst.postOrder();

bst.breadthFirstSearchTraversal();
