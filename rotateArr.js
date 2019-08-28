function reverseArr(arr, d) {
   var temp = arr.splice(0,d);
    var result = arr.concat(temp);
    console.log(result);
}

reverseArr([11, 22, 33, 44, 55, 66], 4, 6);