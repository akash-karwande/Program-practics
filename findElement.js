function findElementArr(arr, ele) {

    // sort the given array
    var sortedArr = arr.sort((a, b) => {
        return a - b;
    });

    // set start, end, middle position
    var start = 0;
    var last = sortedArr.length;
    var middle = Math.floor((start + last) / 2);

    // create loop when middle is not equal to element and our start and end are 
    // both pointing to middle
    while (sortedArr[middle] !== ele && start <= last) {
        // check element is less or greater than the middle
        if (ele < sortedArr[middle]) {
            // if less than change last position to middle - 1
            last = middle - 1;
        } else {
            // else change start position to middle + 1
            start = middle + 1;

        }
        // again set middle value to integer
        middle = Math.floor((start + last) / 2);
    }
    // return the index of element 
    return sortedArr[middle] === ele ? 'The element '+ ele + ' is at index ' + middle : console.log("Element is not in the array");
}

console.log(findElementArr([11, 22, 33, 44, 55, 66, 77, 88, 99], 55));