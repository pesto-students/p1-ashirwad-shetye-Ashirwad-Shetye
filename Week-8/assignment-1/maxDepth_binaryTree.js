
//Given the root of a binary tree, return its maximum depth.
/*
A binary tree’s maximum depth is the number of nodes along the 
longest path from the root node down to the farthest leaf node.
*/

/*
time complexity: O(n)
space complexity: O(n)
*/


class Node{
    constructor(val)
    {
        this.data=val;
        this.left=this.right=null;
    }
}


function maxDepth(root){

    if (root == null){                              //to check for null root
        return 0;
    }else{
        
        let leftDepth = maxDepth(root.left);        //to get left depth
        let rightDepth = maxDepth(root.right);      //to get right depth

        if (leftDepth > rightDepth)
            return (leftDepth + 1);
        else
            return (rightDepth + 1);
    }
}

//input: root = [3,9,20,null,null,15,7]
 
root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(null);
root.left.right = new Node(null);
root.right.left = new Node(15);
root.right.right = new Node(7);
   
console.log("Maximum depth of tree : " + maxDepth(root));

 
 
