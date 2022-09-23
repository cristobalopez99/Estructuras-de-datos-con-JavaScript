class Node {
    constructor(value) {
        this.left = null;
        this.rigth = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.rigth) {
                        currentNode.rigth = newNode;
                        return this;
                    }
                    currentNode = currentNode.rigth;
                }
            }
        }
    }

    search(value, tree = this.root) {
        if(tree == null) {
            return "El elemento no se encuentra.";
        } else if(value > tree.value) {
            return this.search(value, tree.rigth);
        }
        else if(value < tree.value) {
            return this.search(value, tree.left);
        } else {
            return "!El elemento ha sido encontrado!!";
        }
    }
}

const tree = new BinarySearchTree();