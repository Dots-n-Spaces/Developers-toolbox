class TreeNode<T> {
    public value: T;
    public parent: TreeNode<T>;
    public children: TreeNode<T>[] = [];

    constructor(value: T) {
        this.value = value;
    }

    public addChild(node: TreeNode<T>): void {
        this.children.push(node);
        node.parent = this;
    }

    public printAll(): void {
        console.log(this.value);

        for (let i in this.children) {
            this.children[i].printAll();
        }
    }
}

const tree = new TreeNode("root");
const black = new TreeNode("black");
const red = new TreeNode("red");
const blue = new TreeNode("blue");
const yellow = new TreeNode("yellow");
const white = new TreeNode("white");
const pink = new TreeNode("pink");

tree.addChild(black);
tree.addChild(blue);
tree.addChild(pink);

black.addChild(red);
black.addChild(yellow);

red.addChild(white);

tree.printAll();
