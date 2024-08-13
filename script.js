function divide(arr, n) {
let currentSubArray=[];
let currentSum = 0;
let result = [];
for (let item in arr) {
    if(currentSum + item <= n) { 0+3 < 6 | 3 +1 < 6
            currentSubArray.push(item); [0, 3, 1] //  currentSubArray when the loop closes
            currentSum += item; [0+3+1] // Last iteration ends here
    } else {
        result.push(currentSubArray); // This line which returns the final output after collecting all sub-arrays is not executed
        currentSubArray = [item];
        currentSum=item;
    }
    if(currentSubArray.length > 0) {
        result.push(currentSubArray);
    }
}
return result;
}