function findSumFromArr(arr, sum) {
    var pair = [];
    for(var i =0; i < arr.length; i++) {
       for (var j = i + 1; j < arr.length; j++) {
           if (arr[i] + arr[j] == sum) {
               pair.push([arr[i], arr[j]]);
           }
       }
    }

    return pair;
}

console.log(findSumFromArr([1,2,3,4,5,6,7], 8));