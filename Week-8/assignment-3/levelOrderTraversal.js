
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function printLevelOrder() {
    if(!root) return `Tree is empty`;       // if tree is empty

    var queue = [];
    queue.push(root);                       //initialize the queue with root node
    while (queue.length != 0) {
        
        var tempNode = queue.shift();       //remove the first element from the queue
        console.log(tempNode.data);         //print removed element
    
        if (tempNode.left != null) {        //if left child exists, add it to the queue
            queue.push(tempNode.left);
        }

        if (tempNode.right != null) {       //if right child exists, add it to the queue
            queue.push(tempNode.right);
        }
    }
}

var root = new Node("root");
    root.left = new Node("left");
    root.right = new Node("right");
    root.left.left = new Node("left-left");
    root.left.right = new Node("left-right");

console.log("Level order traversal of binary tree is - ");
printLevelOrder();