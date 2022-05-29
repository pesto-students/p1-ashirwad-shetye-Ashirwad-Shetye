
/*
time complexity: O(n)
space complexity: O(n)
*/

function areBracketsBalanced(expr)
{
	
	//initiating stack
	let stack = [];
    
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			
			// Push the element in the stack
			stack.push(x);
			continue;
		}

		// If current character is not opening
		// bracket, then it must be closing.
		// So stack cannot be empty at this point.
		if (stack.length == 0)
			return false;
		
		// Pop the top element from stack and
		let check;
		
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	// Check Empty Stack
	return (stack.length == 0);
}

// Test Cases

console.log(areBracketsBalanced("{([])}"));		//true
console.log(areBracketsBalanced("()"));			//true
console.log(areBracketsBalanced("([]"));		//false