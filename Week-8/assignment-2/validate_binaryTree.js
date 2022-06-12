
//Given the root of a binary tree, 
//determine if it is a valid binary search tree


/*
time complexity: O(n)
space complexity: O(n)
*/

//to create tree nodes
class Node{
    constructor(val)
    {
        this.val = val;
        this.left = this.right = null;
    }
}
     
let prev;
  
function VerifyTree(root){
    if (root != null)                                   // if root is null, return true
    {
        if (!VerifyTree(root.left)){                    // if left subtree is not a BST, return false   
            return false;
        }

        if (prev != null && root.val <= prev.val){      // if root is less than previous node, return false
            return false;
        }
 
        prev = root;                                    // set previous node to root
 
        return VerifyTree(root.right);                  // check right subtree
    }

    return true;
}
 
function isBST(root){
    return VerifyTree(root);
}

//to create tree

let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

//to check if tree is BST

if (isBST(root)){
    console.log("Is a Binary Search Tree");
}else{
    console.log("Not a Binary Search Tree");
}
