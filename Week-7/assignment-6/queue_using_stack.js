
/* 
time complexity: O(n)		--> enqueue = O(n) & dequeue = O(1)
space complexity: O(n)
*/


/* creating a class for queue using stack */
class Queue{
	
	constructor(){
		this.s1 = [];							//stack 1
		this.s2 = [];							//stack 2
	}

	enQueue(x){

		while (this.s1.length != 0){
			this.s2.push(this.s1.pop());		//push all elements from s1 to s2
		}

		this.s1.push(x);						//push x to s1

		while (this.s2.length != 0){
			this.s1.push(this.s2.pop());		//push all elements from s2 to s1
		}
	}

	deQueue(){

		if (this.s1.length == 0){
			return "Queue is Empty";		
		}

		let x = this.s1[this.s1.length - 1];	//get the last element from s1
		
		this.s1.pop();							//pop the last element from s1
		
		return x;
	}
}

let q = new Queue();							//create a new queue

q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

//this will create a queue {1,2,3}

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());

//this will print 1,2,3

//This follows first in first out principle