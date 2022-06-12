
//function to execute

function doTask1(val) {
  setTimeout(() => {
    console.log(`Task 1 Done with value ${val}!`);
  }, 3000);
}

function doTask2(val) {
  setTimeout(() => {
    console.log(`Task 2 Done with value ${val}!`);
  }, 5000);
}

function doTask3(val) {
  setTimeout(() => {
    console.log(`Task 3 Done with value ${val}!`);
  }, 4000);
}

// Execution using Async/Await

async function asyncFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
  });

  let result = await promise;

  return result;
}

let executeAsyncFunction = asyncFunction();
executeAsyncFunction
  .then((val) => {
    doTask1(val);
    return val + 2;
  })
  .then((val) => {
    doTask2(val);
    return val * 3;
  })
  .then((val) => {
    doTask3(val);
  });