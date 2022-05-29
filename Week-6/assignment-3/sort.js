
/*
time complexity: O(n^2)
space complexity: O(1)
*/

function insertionSort(arr) 
{ 
    let i, key, j;                          
    for (i = 1; i < arr.length; i++)               
    { 
        key = arr[i];                       // key is the element to be inserted
        j = i - 1;                          // j is the index of the element to be compared
   
        while (j >= 0 && arr[j] > key)      // compare the element to be inserted with the element to the left of it
        { 
            arr[j + 1] = arr[j];            // shift the element to the right
            j = j - 1;                      
        } 
        arr[j + 1] = key;                   // insert the element to the left of it
    }
    return arr; 
} 
   
console.log(insertionSort([0, 2, 1, 2, 0])); 
console.log(insertionSort([0, 1, 0])); 

