class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var nn = new Node(val);
        if(!this.first){
            this.first = nn;
            this.last = nn;
        }else{
            var temp = this.first;
            this.first = nn;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last  = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}