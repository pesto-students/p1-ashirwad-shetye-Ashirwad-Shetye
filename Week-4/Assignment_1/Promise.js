//generating a random number
let getNumber = () => {
    randomNumber = (Math.random() * 100).toFixed(0);
    return randomNumber;
}

console.log(`Number generated: ${getNumber()}`);

//divisible by 5
let divisible = randomNumber % 5 === 0;

//new promise
let promise = new Promise((resolve, reject) => {
    if (divisible) {
        resolve(console.log(`${randomNumber} is divisible by 5`));
    } else {
        reject(console.log(`${randomNumber} is rejected`));
    }
})

.catch(() => {
    console.log(`Error: ${randomNumber} is not divisible by 5`);
})

//ending promise
.finally(() => {
    console.log(`Promise ended`);
})