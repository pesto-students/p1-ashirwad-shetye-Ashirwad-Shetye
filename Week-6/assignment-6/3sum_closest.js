
//time complexity: O(n^2)
//space complexity: O(1)

function threeSumClosest(array, target) {
    let result = array[0] + array[1] + array[2];
    let sum = 0;
    let l = 0;
    let r = 0;
    array.sort((a, b) => (a - b));
    for (let i = 0; i < array.length - 2; i++) {
        //tracking the left and right pointers
        if (i > 0 && array[i] === array[i - 1]) continue;
        l = i + 1;
        r = array.length - 1;
        while (l < r) {
            sum = array[i] + array[l] + array[r];
            if (sum < target) {
            l++;                            //increment the left pointer
            } else if (sum > target) {
            r--;                            //decrement the right pointer
            } else {
            return sum;
            }
            //comparing absolute difference 
            if (Math.abs(sum - target) < Math.abs(result - target)){
            result = sum;
            }
        }
    }
    return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
