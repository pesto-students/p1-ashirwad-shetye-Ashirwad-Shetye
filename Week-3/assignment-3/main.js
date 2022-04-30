function createIncrement() {
    let count = 0;
    function increment() {
        count++;   //count = 0
        /*since the operator is postfix (x++),the increment operator increments 
          and returns the value before incrementing
        */
    }
    let message= `Count is ${count}`;
    function log() {
        console.log(message);
    }


    return [increment, log];
    }
    
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // output is "Count is 0"