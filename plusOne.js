/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    var place = digits.length - 1;
    var remainder = true;

    while(remainder && place >= 0) {
        digits[place]++;
        if(digits[place] === 10) {
            digits[place] = 0;
            place--;
            if(place < 0) {
                digits.unshift(1);
            }
        }
        else {
            remainder = false;
        }
    }


    return digits;
};
