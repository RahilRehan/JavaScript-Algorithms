//count unique values in a sorted array
//approach: two pointer, one skipping pointer and other to swap
clear();

function countUniqueValues(arr){
    var i = 0, j=1;
    while(j!=arr.length){
        if(arr[j]==arr[i]){
            j++;
        }
        else{ // shift the non unique element to i+1th position
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i+1;
}

countUniqueValues([1,1,2,2,3,3,4,4,5]);