class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.bottom.next = newNode;
            this.bottom = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        this.top = this.top.next;
        this.length--;

        return this;
    }
}

const myQueue = new MyQueue();