clear();
function pivotHelper(arr, start = 0, end = arr.length+1){ //when no values of left and right are passed it defaultly set them to 1, else sets to what is passed
    var pivotPoint = arr[start];
    var pivotIndex = start,temp;
    for(let i=start+1; i<arr.length; i++){
        if(arr[i]<pivotPoint){
            pivotIndex++;
            temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = temp;
        }
    }
    temp = arr[pivotIndex];
    arr[pivotIndex] = arr[start];
    arr[start] = temp;
    return pivotIndex;
}

function quickSort(arr, left=0, right = arr.length-1){ //when no values of left and right are passed it defaultly set them to 1, else sets to what is passed
    if(left<right){
        let index = pivotHelper(arr,left, right);
        quickSort(arr, left, index-1);
        quickSort(arr, index+1, right);
    }
    return arr;
}

quickSort([28,41,4,11,16,1,40,14,36,37,42,18]);
//pivotHelper([28,41,4,11,16,1,40,14,36,37,42,18]);