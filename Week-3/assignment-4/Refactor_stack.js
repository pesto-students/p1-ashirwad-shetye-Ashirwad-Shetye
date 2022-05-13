/*
function createStack() {
    return{
        items:[],
        push(item) {
            this.items.push(item); //this. made all members public
        },
        pop() {
            return this.items.pop();
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
stack.items= [10,100,1000];// Encapsulationbroken!

console.log(stack.items);
*/

//refactored function

function createStack() {
    let items = [];  
    return{                     
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    }
}
const stack = createStack(); //items is not directly accessible outside the function createStack()
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined 

console.log(stack.items);