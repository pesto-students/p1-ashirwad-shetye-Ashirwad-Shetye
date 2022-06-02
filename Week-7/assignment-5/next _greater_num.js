
/*
time complexity: O(n)
space complexity: O(n)
*/

function printNGE(arr, n)
{
	var stack = [];

	stack.push(arr[0]);											//pushing first element in stack

	for (var i = 1; i < n; i++)
	{

		if (stack.length == 0) {
			stack.push(arr[i]);
			continue;
		}

		/* if stack is not empty, then
		pop an element from stack.
		If the popped element is smaller
		than next, then
		a) print the pair
		b) keep popping while elements are
		smaller and stack is not empty */
		while (stack.length ==0 == false && stack[stack.length-1] < arr[i]){
			console.log( stack[stack.length-1]
				+ " --> " + arr[i]);
			stack.pop();
		}

		/* push next to stack so that we can find
		next greater for it */
		stack.push(arr[i]);
	}

	/* After iterating over the loop, the remaining
	elements in stack do not have the next greater
	element, so print -1 for them */
	while (stack.length !=0) {
		console.log( stack[stack.length-1] + " --> " + -1 );
		stack.pop();
	}
}

/* Driver code */
var arr = [11, 13, 21, 3];
var n = arr.length;
printNGE(arr, n);

