functioncreateStack() {
    return{
        items:[],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    }
}

conststack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
stack.items= [10,100,1000];// Encapsulationbroken!

functioncreateStack() {
    // Write your code here...
}
conststack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined
