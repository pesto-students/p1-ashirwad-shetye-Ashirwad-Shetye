//test arrays
let arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr_2 = [1, 2, 5, 4, 5, 6, 7, 8, 9, 10];

//test function

const hasDuplicates = (array) => {
  let set = new Set(array);
  //set only stores unique values
    if(set.size !== array.length){
        return true;
    } else {
        return false;
    }
}

console.log(hasDuplicates(arr_1));
console.log(hasDuplicates(arr_2));

