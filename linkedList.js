class Node {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(name) {
        var newNode = new Node(name);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var n1 = new SinglyLinkedList();
n1.push('Akash');
n1.push("Ani");
n1.push('adi')
console.log(n1);