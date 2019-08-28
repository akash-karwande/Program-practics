function shiftArr(arr, d, n) {
    var temp = arr.splice(0, d);
    var result = arr.concat(temp);
    for (var k = 0; k < d; k++) {
        result.shift(arr[k]);
    }
    
    return result;

}

console.log(shiftArr([43, 12, 3, 22, 24, 5], 1, 6));