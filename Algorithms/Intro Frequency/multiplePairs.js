//funtion that accepts sorted array and return the first pair where sum is zero \
//Approach: having two pointer, one pointing to begening and other to end of array and checking for sum to be zero

clear();
function sumZero(arr){
    var f = 0,l = arr.length-1; 
    while(f!=l){
        let sum = (arr[f]+arr[l]);
        if(sum == 0){
            var anss = [arr[f],arr[l]]; 
            return anss;
        }
        else if(sum>0){
            l--;
        }else{
            f++;  
        }
    }
}
console.log(sumZero([-3,-2,-1,0,1,3,5]));
console.log(sumZero([1,2,3]))