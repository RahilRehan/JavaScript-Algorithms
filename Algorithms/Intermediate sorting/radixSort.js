clear();
function getDigit(number, dig){
        return Math.floor(number/Math.pow(10,dig)) % 10;
}

function digitCount(number){
    if(number==0) return 1;  
    return Math.floor(Math.log10(number)) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums){
    let maxDigitsCount = mostDigits(nums);
    for(let k=0; k<maxDigitsCount; k++){
        let digitBuckets = Array.from({length: 10}, ()=>[]);
        for(let i=0; i<nums.length;i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
//mostDigits([23,1563]);
// getDigit(234,2);
//digitCount(724);
radixSort([23,345,5467,12,2345,9852]);