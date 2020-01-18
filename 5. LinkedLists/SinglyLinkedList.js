clear();
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var nn = new Node(val);
        if (!this.head) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length==0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){ //remove from beginning
         this.head = this.head.next;
         this.length--;       
    }
    unshift(val){
        var nn = new Node(val);
        if(!this.head){
            this.head = nn;
            this.tail = nn;
        }else{
            nn.next = head;
            this.head = nn;   
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0 || index>=this.lenght) return null;
        var counter = 0;
        var current = this.head;
        while(counter != index){
            current = current.next;
            counter++;
        }
        return current;
    }
    insert(index, val){
        if(index<0 || index > this.length) return false;
        if(index == this.length) return this.push(val);
        if(index === 0) return this.unshift(val);
        var nn = new Node(val);
        var preev = this.get(index - 1);
        var temp = prev.next;
        prev.next = nn;
        nn.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index<0 || index>=this.length) return undefined;
        if(index === 0) return this.shift();
        if(index == this.length-1) return this.pop();
        var prev = this.get(index - 1);
        var removed = prev.next;
        prev.next = removed.next;
        return removed;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

let slist = new SinglyLinkedList();
slist.unshift("zero");
slist.insert(1,"rahil");
slist.get(0);
// slist.push("first");
// slist.push("second");
// slist.push("third");
// slist.traverse();
// slist.pop();
// slist.traverse();
// slist.shift();
// slist.traverse();
