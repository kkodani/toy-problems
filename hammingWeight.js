/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var d = 2;
	var count = 0;

	while(n > 0) {
		var remainder = n % d;
		if(remainder > 0) {
			count++;
		}
		n -= remainder;
		d *= 2;
	}
	return count;
};
