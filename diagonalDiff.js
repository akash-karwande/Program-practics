/* 
  Diagonal Difference Solution.
  sample matrix = [[1,2,3], [4,5,6], [7,8,9]]
*/ 
function diagonalDifference(matrix) {
    // length of input matrix.
     const length = matrix.length;
     let diagonal1 = 0;
     let diagonal2 = 0;
   
     // Looping through the array and summing the diagonals.
     for(let i = 0; i < length; i++){
       // Calculating the primary diagonal.
         diagonal1 += matrix[i][i];
       // Reversing the second dimension of array to calculate secondary diagonal.
         diagonal2 += matrix[length -1 - i][i]
     }
     // return absolute difference value.
     return Math.abs(diagonal1 - diagonal2);  
 
 }
 
 console.log(diagonalDifference([[1,4,5], [4,5,6], [7,8,9]]));