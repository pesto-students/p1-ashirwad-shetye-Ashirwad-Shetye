
function* asyncGenerator() {
    console.log("Generating...1");
  yield 1;
  console.log("Generating...2");
  yield 2;
  console.log("Generating...3");
  yield 3;
}


const callGen = asyncGenerator();
console.log(callGen.next());
console.log(callGen.next());
console.log(callGen.next());
console.log(callGen.next());

