

const fibonacci_num = (n) => ({
    [Symbol. iterator]: () => {  //[Symbol. iterator] is a method that returns an iterator object.
        let i = 0;   
        let n1 =0, n2 = 1, nextNum;
        return {
            next: () => {        //next method returns an object with a value property and done property.
                if( i++ <= n) {
                    nextNum = n1 + n2;
                    n1 = n2;
                    n2 = nextNum;
                    return { value: n1, done: false}
                    //done property gives boolean value. If false then recurse
                }
                else {
                    return { done: true }
                }
            }
        }
    }
});


console.log([0,...fibonacci_num(8)]);  // gives an array of n fibonacci numbers.

