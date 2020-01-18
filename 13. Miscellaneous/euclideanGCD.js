clear();
function eGcd(a,b){
	if(b==0) return a;
	else return eGcd(b,a%b);
}
eGcd(456,8)