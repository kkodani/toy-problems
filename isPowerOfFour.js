/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {

    if(num <= 0 || num === 2 || num === 3) {
        return false;
    }
    if(num === 1) {
        return true;
    }
    var d = 1;
    while(d < num) {
        d *= 4;
        if(num % d !== 0) {
            return false;
        }

    }
    return true;

};
