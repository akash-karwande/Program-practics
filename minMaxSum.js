function miniMaxSum(arr) {
    arr.sort();
    var minSum = sum(arr.slice(0, -1));
    var maxSum = sum(arr.slice(1))
    console.log(minSum, maxSum);
    function sum(subArr) {
        return subArr.reduce(function(a, b) {
          return a + b;
        });
      }
  }

console.log(miniMaxSum([1,3,4,1,5]));

// Alternate method
function miniMaxSum(arr) {
  var sortedArray = arr.sort();
  var minArray = sortedArray.slice(0, sortedArray.length - 1);

  var minSum = minArray.reduce((a, b) => {
    return a + b;
  });


  var maxArray = sortedArray.slice(1, sortedArray.length);
  var maxSum = maxArray.reduce((c, d) => {
    return c + d;
  });

  return `${minSum} ${maxSum}`;

}
console.log(miniMaxSum([1, 3, 4, 1, 5]));