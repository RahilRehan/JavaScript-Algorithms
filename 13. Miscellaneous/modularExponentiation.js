clear();
function emod(a,b,c){ //a->number, b->power, c->modulus
    if(b==0) return 1;
    else if(b%2 == 0){
        var d = emod(a,b/2,c);
        return (d*d)%c;
    }else{
        return ((a%c)*emod(a,b-1,c))%c;
    }
}
emod(12,10,5);