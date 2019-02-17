# Program-practics


// sum of n number
function nSum(n){
  var a = n * (n+1)/2;
  return a
}
console.log(nSum(10))


//function to find sum of array
function sum(arr) {
  var a = arr.reduce(function(acc,ele){
    return acc + ele;
  });
  console.log(a);
 }
sum([2,3,4,1])


//Recrusive Function or Factorial of number
function facto(num) {
  if (num == 1){
    return 1;
  }
  return num * (facto(num-1));
}
console.log(facto(3))


// palindrom or not
function ispalin(string){
  var a = string.split('').reverse().join('');
  if (string === a){
    console.log('palindrom');
  }else{
    console.log('not palindrom');
  }
}
ispalin('aka')
// Sorting of Aray
function arrSort(arr){
  return arr.sort(function(a,b){
    return a-b;
  });
}
console.log(arrSort([645,89,6,39,54,98]))

//Check element is in array or not
function inArray(arr,element){
  if (arr.indexOf(element)===-1){
    console.log('not in array');
  }else{
    console.log('in array');
  }
}
inArray([6,4,9,2,3,5],90)

//Function for finding min and max no in array
function minMax(arr){
  var a = Math.min.apply(null,arr);
  console.log(a);
  var b = Math.max.apply(null,arr);
  console.log(b);
}
minMax([3,5,65,3,2,88,98,1])

//Bubble sort Algorithm

function bubble(arr) {
  for ( var i =arr.length; i>0; i-- ){
    for ( var j=0; j<i; j++ ){
      if( arr[j] > arr[j+1] ){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        
      }
    }
  }
  return arr;
}

console.log(bubble([22,2,44,55,66,1,3,33]))

// Reverse array

function reverseAarray(arr) {
  for (var i = 0; i<arr.length/2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = temp;
    
  }
  return arr;
}

console.log(reverseAarray([1,2,3,4,5,6]))

