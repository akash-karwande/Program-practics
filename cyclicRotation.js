function cyclicRotation(arr) {
    // Store last element in a variable say last
    var last = arr[arr.length - 1];
    
    for (i = arr.length - 1; i > 0; i--) {
        // Shift all elements one position ahead
        arr[i] = arr[i - 1];
    }
    // Replace first element of array with last
    arr[0] = last;

    return arr;
}

console.log(cyclicRotation([1, 23, 4, 5, 6, 3]));