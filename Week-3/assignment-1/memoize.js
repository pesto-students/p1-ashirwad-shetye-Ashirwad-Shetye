//original function
/*
const factorial = n => {
if(n == 0 || n == 1){
    return 1;
}else{
    return n * factorial(n-1);
}
}

console.log(factorial(80));
console.log(factorial(40));
console.log(factorial(92));
console.log(factorial(24));
*/


//creating memoize function
function memoize_factorial(n) {
    const cache = [];


    function factorial(n){
        if(n == 0 || n == 1){
            return 1;
        }
        if(cache[n]) {
            return cache[n];
        }
        return cache[n] = n * factorial(n-1);
    }

        
    output = factorial(n); // result = output.tofixed(4);
    result = Math.round(output * 100) / 100;
    return result;
}



console.log(memoize_factorial(80));
console.log(memoize_factorial(40));
console.log(memoize_factorial(92));
console.log(memoize_factorial(24));
