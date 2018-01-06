function bin_to_dec(num = 0) {
	var i=0;
	var result=0;
	while(i<num.length) {
		if(num.charAt(i)==1 || num.charAt(i)==0) {
			result+=(num.charAt(i))*(Math.pow(2, num.length-i-1));
		}
		else {
			return underfined;
		}
		i++;
	}
	return result;
}
