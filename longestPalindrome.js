function longestPalindrome (string) {
  var pal = '';
  var rev = reverseString(string);

  for(var i=0; i<string.length; i++) {
  	for(var j=i; j<=string.length; j++) {
  	  var sub = string.substring(i, j);
  	  if(rev.includes(sub) && sub.length > pal.length) {
  	  	pal = sub;
  	  }
  	}
  }

  return pal;
}

function reverseString(string) {
	var rev = '';
	for(var i=string.length-1; i>=0; i--) {
		rev += string[i];
	}
	return rev;
}
