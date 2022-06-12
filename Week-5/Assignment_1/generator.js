
//function to execute

function task1(val) {
    setTimeout(() => {
    console.log(`Task 1 Done with value ${val}!`);
    }, 3000);
}
  
function task2(val) {
    setTimeout(() => {
    console.log(`Task 2 Done with value ${val}!`);
    }, 5000);
}
  
    function task3(val) {
    setTimeout(() => {
    console.log(`Task 3 Done with value ${val}!`);
    }, 4000);
}


// Execution using Generator

async function* asyncGeneratorFunction() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    });

    let result = await promise;

    yield result;
}

let executeAsyncGeneratorFunction = asyncGeneratorFunction();
executeAsyncGeneratorFunction.next()
    .then((obj) => {
    task1(obj.value);
    return obj.value + 2;
    })
    .then((val) => {
    task2(val);
    return val * 3;
    })
    .then((val) => {
    task3(val);
    });