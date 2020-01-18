//implement selection sort, which sorts array of integers
//approach: O(n^2), finding minimum every time and bringing it to front of an array
// swap if and only if lowest index changes than the initial one

clear();

function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        var minimum = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minimum]){
                minimum = j;                
            }
        }
        if(i!=lowest){  //making sure that lowest index is changed
            var temp = arr[i];
            arr[i] = arr[minimum];
            arr[minimum] = temp;
        }
    }
    return arr;
}

selectionSort([3,6,2,8,4])