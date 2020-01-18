// this program checks if two strings are anagrams of each other or not, 
// i.e valid anagrams have same characters but may be at different positions
// Approach: here I used frequency counting aproach using javascripts objects

clear();
function validAnagram(s1, s2){
    if(s1.length != s2.length){  //if lenghts are different two strings can never be anagrams of each other
        return false;
    }
    freq1 = {};
    freq2 = {};
    for(var i=0; i<s1.length; i++){
        freq1[s1[i]] = (freq1[s1[i]] || 0)  + 1;
        freq2[s2[i]] = (freq2[s2[i]] || 0)  + 1;
    }
    for(let i in freq1){
        if(!(i in freq2)){ //checking if the key(element) from one frequency object is present present in other(short circuit)
            return false;
        }
        if(freq1[i] != freq2[i]){ //checking frequencies of each character(every key) appeared
            return false;
        }
    }
    return true;
}
validAnagram("awesome","awesom"); //returns false