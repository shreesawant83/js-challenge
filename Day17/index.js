//Start Learning Day17
//Activity 1
//Task 1
// class Node {
//     constructor(nodeValue = null) {
//         this.head = {
//             value: nodeValue,
//             next: null
//         }
//         this.tail = this.head
//         this.size = 1;
//     }

//     appendNode(nodeData) {
//         let newNode = {
//             value: nodeData,
//             next: null
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.size += 1;
//     }
//     traverseNode() {
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter < this.size) {
//             console.log(currentNode);
//             currentNode = currentNode.next;
//             counter++;
//         }
//     }
//     removeNode(index) {
//         debugger;
//         let counter = 1;
//         let lead = this.head;
//         if (index == 1) {
//             this.head = this.head.next;
//         } else {
//             while (counter < index - 1) {
//                 lead = lead.next;
//                 counter++;
//             }
//             let nextNode = lead.next.next;
//             lead.next = nextNode;
//             console.log(lead);
//         }
//     }

// }
// // let node = new Node(300);
// // console.log(node);

// //Task 2

// let node = new Node(100);
// node.appendNode(200);
// node.appendNode(300);
// node.appendNode(400);
// node.appendNode(500);
// node.traverseNode();
// node.removeNode(1);
// console.log(node);

//Activity 2
//Task 3
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     //Check empty
//     isEmpty() {
//         return this.items.length == 0
//     }

//     //push element in stack
//     push(item) {
//         this.items.push(item);
//     }

//     //pop element in stack
//     pop() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         } else {
//             return this.items.pop();
//         }
//     }

//     //get top of the element
//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         } else {
//             return this.items[this.items.length - 1]
//         }
//     }

//     getStackValues() {
//         return this.items.join(" ");
//     }


// }
// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log("getStackValues", stack.getStackValues());
// console.log("peek", stack.peek());
// console.log("pop", stack.pop());
// console.log("getStackValues", stack.getStackValues());

// //Task 4
// function reverstring(stringValue) {
//     let reverseStack = new Stack();
//     for (let runFor = 0; runFor < stringValue.length; runFor++) {
//         reverseStack.push(stringValue[runFor]);
//     }
//     let reversedString = "";
//     while(!reverseStack.isEmpty()){
//         reversedString+=reverseStack.pop();
//     }
//     return reversedString;
// }
// let givenString = "Tom Letham";
// console.log(reverstring(givenString));

//Activity 3 Queue
//Task 5
// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     enqueue(item) {
//         this.items.push(item);
//     }
//     dequeue() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         return this.items.shift();
//     }
//     isEmpty() {
//         return this.items.length == 0;
//     }
//     getSize() {
//         return this.items.length;
//     }
//     peek() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.items[0];
//     }
//     getValues() {
//         if (this.isEmpty()) {
//             return "Queue is empty ";
//         }
//         return this.items.join(" ");
//     }

//     clear(){
//         this.items=[];
//     }
// }

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.getValues());
// console.log(queue.getSize());
// console.log(queue.isEmpty());
// console.log(queue.dequeue());
// console.log(queue.peek());
// console.log(queue.getValues());
// queue.clear();
// console.log(queue.isEmpty());


//Task 6
// class Queue {
//     constructor() {
//         this.jobs = [];
//     }

//     enqueue(job) {
//         this.jobs.push(job);
//         console.log(`Added ${job}`);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         let job = this.jobs.shift();
//         console.log(`Processing ${job}`);
//         return this.jobs
//     }

//     isEmpty() {
//         return this.jobs.length == 0;
//     }

//     clear() {
//         this.jobs = [];
//     }

//     getJobsSize() {
//         return this.jobs.length;
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Jobs empty";
//         }
//         return this.jobs[0];
//     }

//     getJobValues(){
//         return this.jobs.join(" , ");
//     }
// }

// let jobQueue = new Queue();
// jobQueue.enqueue(`Job 1`);
// jobQueue.enqueue(`Job 2`);
// console.log(jobQueue.getJobValues());
// jobQueue.dequeue();
// console.log(jobQueue.getJobValues());
// console.log(jobQueue.getJobsSize());

//Activity 4 Binary Tree
//Task 7
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// let treeNode = new TreeNode(300);
// console.log(treeNode);

//Task 8 
class BinaryTree {
    constructor() {
        this.root = null;
    }

    isTreeEmpty() {
        return this.root === null;
    }

    makeTree(value) {
        let newNode = new TreeNode(value);
        if (this.isTreeEmpty()) {
            this.root = newNode;
        } else {
            this.inserNode(this.root, newNode)
        }
    }

    inserNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left == null) {
                root.left = newNode;
            } else {
                this.inserNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.inserNode(root.right, newNode)
            }
        }
    }

}

let binaryTree = new BinaryTree();
binaryTree.makeTree(20)
binaryTree.makeTree(10)
binaryTree.makeTree(5)
binaryTree.makeTree(30)
binaryTree.makeTree(25)
binaryTree.makeTree(40)
console.log(binaryTree);

