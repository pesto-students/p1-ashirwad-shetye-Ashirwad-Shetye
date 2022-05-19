
/*
    time complexity: O(n)
    space complexity: O(n)
*/


function pairWithDiffs(array, k) {
    //storing the values in keys
    let hashmap = new Map();
    for (let i = 0; i < array.length; i++) {
        let difference = array[i] - k;
        if (hashmap.has(difference)) {
            return 1;
        }
        hashmap.set(array[i], array[i]);
    }
    return 0;
}

console.log(pairWithDiffs([1, 2, 3, 4, 5, 6], 5));
console.log(pairWithDiffs([8, 7, 12, 5, 6], 5));