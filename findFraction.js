var noOfPostive = 0;
var noOfNegative = 0;
var noOfZero = 0;

function plusMinus(arr) {
    var length = arr.length
    var result = []
    for (var i = 0; i < length; i++) {
        if (arr[i] > 0) {
            noOfPostive += 1;
        } else if (arr[i] < 0) {
            noOfNegative += 1;
        } else {
            noOfZero += 1;
        }

    }
    var FractionOfPostive = (noOfPostive / length);
    var FractionOfNegative = (noOfNegative / length);
    var FractionOfZero = (noOfZero / length);
   
    result.push(FractionOfPostive, FractionOfNegative, FractionOfZero);
    console.log(result);




}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));