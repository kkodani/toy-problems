/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*
    var results = 0;

    var recurse = function(steps) {
        if(steps > n) {
            return;
        }
        else if(steps === n) {
            results++;
        }
        else {
            recurse(steps + 1);
            recurse(steps + 2);
        }
    };

    recurse(0);
    return results;
    */
    if (n === 0) {
        return 1;
    }
    else {
        var N = [];
        N[0] = 1;
        N[1] = 1;
        for (var i = 2; i <= n; i++) {
            N[i] = N [ i - 1] + N[i - 2];
        }
        return N[n];
    }
};
