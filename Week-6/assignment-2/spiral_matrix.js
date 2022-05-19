
var spiralorder = function(matrix){

     //creating boundaries for 2d array
     let top = 0;                           
     let left=0;
     let bottom = matrix.length - 1;
     let right = matrix[0].length - 1;

     //creating empty array to store result
     const result = [];                        
     
     //calculating size of 2d array
     const size = matrix.length * matrix[0].length;     
     
     //creating a while loop to run until result array is equal to size of 2d array
     while(result.length < size){

        for(let i = left; i <= right && result.length < size; i++){              //iterating through left to right
           result.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i <= bottom && result.length < size; i++){              //iterating through top to bottom
           result.push(matrix[i][right]);
        }
        right--;

        for(let i = right; i >= left && result.length < size; i--){              //iterating through right to left
           result.push(matrix[bottom][i]);
        }
        bottom--;

        for(let i = bottom; i >= top && result.length < size; i--){              //iterating through bottom to top
           result.push(matrix[i][left]);
        }
        left++;
    }

    return result;
}


console.log(spiralorder([[1,2,3],[4,5,6],[7,8,9]])); 
