/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    /*
    if(n <= 0 || n === 2) {
        return false;
    }
    if(n === 1) {
        return true;
    }
    var d = 1;
    while(d < n) {
        d *= 3;
        if(n % d !== 0) {
            return false;
        }

    }
    return true;
    */
    return (n > 0) && (1162261467 % n === 0);
};
