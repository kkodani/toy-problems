/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 0) {
        return false;
    }
    var divisors = [2, 3, 5];
    for (var d in divisors) {
        while(num % divisors[d] === 0) {
            num /= divisors[d];
        }
    }
    return num === 1;
};
