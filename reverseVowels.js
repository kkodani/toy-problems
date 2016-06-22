/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    //var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    //var vowels = {a:'a', e:'e', i:'i', o:'o', u:'u', A:'A', E:'E', I:'I', O:'O', U:'U'};
    //or five === statements
    s = s.split('');
    var f = 0;
    var b = s.length-1;
    for(f; f < b; f++) {
        if(isVowel(s[f])) {
            while(!isVowel(s[b])) {
                b--;
            }
            var temp = s[f];
            s[f] = s[b];
            s[b] = temp;
            b--;
        }
    }

    return s.join('');
};

function isVowel(char) {
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U';
}
