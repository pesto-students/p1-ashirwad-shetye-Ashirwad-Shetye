/*
time complexity: O(n)
space complexity: O(1)
*/
 
var head; // head of list

//to create a new node
class Node {
   constructor(val) {
       this.data = val;                 //assign data
       this.next = null;                //initialize next as null
   }
}

//reverse function
function reverse(head) {
   if (head == null || head.next == null){
       return head;
   }

   let rest = reverse(head.next);       // reverse the rest of the list
   head.next.next = head;               // point the next of the head to the head
   head.next = null;                    // point the next of the head to null
   return rest;
}

//to print the linked list
function print() {
var temp = head;
    while (temp != null) {
       console.log(temp.data + " ");
       temp = temp.next;
    }
    console.log();
}

//to push data into linked list
function push(data) {
    var temp = new Node(data);          //create a new node
    temp.next = head;                   //point the next of new node to head
    head = temp;                        //make new node as head
}

//pushing {2, 7, 8, 9, 10}
push(10);
push(9);
push(8);
push(7);
push(2);

console.log("Given linked list");
print();

head = reverse(head);

console.log("Reversed Linked list");
print();