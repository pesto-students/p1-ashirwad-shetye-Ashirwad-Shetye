//using kadane's algorithm to calculate max sum of contiguous subarray

arr1 = [1, 2, 3, 4, -10]  //10
arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4] //6

//algorithm 

const maxSubArray = (array) => {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < array.length; i++) {
        currentSum = Math.max(array[i], currentSum + array[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSubArray(arr1));
console.log(maxSubArray(arr2));