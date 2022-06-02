
/*
time complexity: O(n)
space complexity: O(1)
*/

/*
using Floyd’s fast and slow pointer algorithms 
*/

//to create a new node
class Node
{
	constructor(data)
	{
		this.data = data;
		this.next = null;
	}
}

let head;                                           //create a head pointer

//to push a new node at the beginning of the list
function push(new_data)
{
	let new_node = new Node(new_data);              //create a new node
	new_node.next = head;                           //point the new node to the head
	head = new_node;                                //move the head to point to the new node
}

function detectLoop(){

	let slow_p = head;                              //create a slow pointer to the head
    let fast_p = head;                              //create a fast pointer to the head
	let flag = 0;
	
	while (slow_p != null && fast_p != null && fast_p.next != null){
		slow_p = slow_p.next;                       //slow pointer moves one step
		fast_p = fast_p.next.next;                  //fast pointer moves two steps
		if (slow_p == fast_p){
			flag = 1;                               //if the pointers meet, there is a loop
			break;
		}
	}
	if (flag == 1)
        return true;
	else
        return false;
}

//pushing {2, 7, 8, 9, 10}
push(10);
push(9);
push(8);
push(7);
push(2);

// Create loop for testing
head.next.next.next = head;                    //creating a loop by pointing the third node to the head

console.log(detectLoop());
