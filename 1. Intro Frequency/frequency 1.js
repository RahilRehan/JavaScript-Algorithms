// this program checks if the frequency of elements in first array is same as the frequency of elements in second array,
// but the elements in the second array are squared to the elements in the first array

clear();
function same(arr1, arr2) {
    if(arr1.length!=arr2.length){
        return false;
    }
    freq1 = {} //empty objects creation for storing key(array elements) and value(frequency) pairs
    freq2 = {}
    for(let i of arr1){
        freq1[i] = (freq1[i] || 0) + 1; // inititalizes key to 0 if it's is not initialized and counts
    }
    for(let i of arr2){
        freq2[i] = (freq2[i] || 0) + 1;
    }
    console.log(freq1);
    console.log(freq2);

    for(let i in freq1){
        if(!(i**2 in freq2)){  //checking if the key(element) squared from one frequency object is present present in other(short circuit)
            return false;
        }
        if(freq2[i**2] !== freq1[i]){  //checking the frequency of every key
            return false;
        }
    }

    return true;
}

same([1, 2, 1],[1, 4, 1]);
