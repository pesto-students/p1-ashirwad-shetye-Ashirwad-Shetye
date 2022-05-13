
//original function

const factorial = n => {
    
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

console.time(`time`);
console.log(factorial(80));
console.timeEnd(`time`);

console.time(`time`);
console.log(factorial(40));
console.timeEnd(`time`);

console.time(`time`);
console.log(factorial(92));
console.timeEnd(`time`);

console.time(`time`);
console.log(factorial(24));
console.timeEnd(`time`);


console.log(`Starting Memoize outputs ----------->`)

//creating memoize function

function memoize_factorial(n) {
    const cache = {};

    console.time(`time`);

    function factorial(n){
        if(n == 0 || n == 1){
            return 1;
        }
        if(cache[n]) {
            return cache[n];
        }
        return cache[n] = n * factorial(n-1);
    }

    console.timeEnd(`time`);
        
    output = factorial(n); // want result = output.tofixed(4);
    result = Math.round(output * 100) / 100;
    return result;
}

console.log(memoize_factorial(80));
console.log(memoize_factorial(40));
console.log(memoize_factorial(92));
console.log(memoize_factorial(24));

/*
    //normally we could also use 

    const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];  
        if (n in cache) {
            return cache[n];}
         else {
            let result = fn(n);
            cache[n] = result;
            return result;}
        }
    }

    //then call memoize(factorial)

*/