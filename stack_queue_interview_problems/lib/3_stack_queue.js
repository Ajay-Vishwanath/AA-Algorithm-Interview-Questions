// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(newNode){
        if (newNode.next) {
            newNode.next = null;
        }

        if (!this.top){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let temp = this.top;
            this.top = newNode
            newNode.next = temp;
        }
        return ++this.length;
    }

    pop(){
        if (!this.top){
            return null
        } else if (this.top === this.bottom){
            this.top.next = null;
            this.bottom = null;
        }

        let temp = this.top
        this.top = this.top.next;
        --this.length;
        return temp

    }

    size(){
        return this.length
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = new Stack()
        this.outStack = new Stack()
        this.front = null;
        this.back = null;
    }

    enqueue(val){
        let newNode = new Node(val)
        if (!this.front){
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode
            this.back = newNode
        }

        this.inStack.push(new Node(val))
        return this.size();
    }

    dequeue(){
        if (!this.front){
            return null;
        } else if (this.front === this.back){
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next 
        }

        while (this.inStack.size() > 0 ){
            let removedEle = this.inStack.pop()
            this.outStack.push(removedEle)
        }

        let x = this.outStack.pop()
        return x
    }

    size(){
        return this.inStack.size() + this.outStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
