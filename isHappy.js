/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    var previous = [n];

    while(n !== 1) {
        //parse num
        var array = [];
        while(n > 0) {
            var r = n % 10;
            array.push(r);
            n = Math.floor(n / 10);
        }
        //
        n = 0;
        for(var i = array.length - 1; i >= 0; i--) {
            n += array[i] * array[i];
        }

        if(previous.includes(n)) {
            return false;
        }
        previous.push(n);

    }
    return n === 1;
};
