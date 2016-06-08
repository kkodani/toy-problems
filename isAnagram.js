/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // s = s.split("").sort().join("");
    // t = t.split("").sort().join("");
    // return s === t;

    if(s.length !== t.length) {
        return false;
    }
    var count = {};
    for(var i=0; i<s.length; i++) {
        if(count[s[i]]) {
            count[s[i]] = count[s[i]] + 1
        }
        else {
            count[s[i]] = 1;
        }
        if(count[t[i]]) {
            count[t[i]] = count[t[i]] - 1
        }
        else {
            count[t[i]] = -1;
        }

    }
    for(var k in count) {
        if(count[k] !== 0) {
            return false;
        }
    }
    return true;
};
