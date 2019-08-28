function findSumPair(arr, sum) {
    let hashMap = {},
        results = [];
    for (let i = 0; i < arr.length; i++) {
        if (hashMap[arr[i]]) {
            console.log(hashMap[arr[i]]);
            results.push([hashMap[arr[i]], arr[i]])
        } else {
            hashMap[sum - arr[i]] = arr[i];
        }
    }
    return results;
}

//console.log(findSumPair([2, 3, 1, 4,-1, 5, 6, 7, 8], 4));

// Alternative method
function twoSum(arr, S) {
    const sum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (S == arr[i] + arr[j]) {
                sum.push([arr[i], arr[j]]);
            }
        }
    }
    return sum;
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 9));