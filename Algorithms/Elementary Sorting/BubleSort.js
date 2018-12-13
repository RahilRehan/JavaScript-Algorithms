//sorting array of integers using bubble sort
//approach: O(n^2), finding max in array and swapping it out to end at every outer iteration
//                  do not iterate the last max elements once they get there correct position(i.e max at end)
//                  implement noSwap variable which keeps track if there were any swappings in ith iteration, if not then array is already sorted, thereofore exit
clear();

function bubbleSort(arr){
    var noSwap;
    for(var i=arr.length;i>0;i--){
        noSwap = true;
        for(var j=0;j<i-1;j++){
            console.log(i, j, arr, arr[j], arr[j+1]);
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
}

bubbleSort([1,2,3,4,5]);