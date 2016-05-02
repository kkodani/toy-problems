var letters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};

function telephoneWords (digitString) {

    var combos = [];

    var recurse = function(word) {

        if(word.length === digitString.length) {
            combos.push(word);
            return;
        }

        var currentNum = digitString[word.length];
        var currentLetters = letters[currentNum];

        for(var k=0; k<currentLetters.length; k++) {
            var currentLetter = currentLetters[k];
            recurse(word + currentLetter);
        }
    };

    recurse('');
    return combos;
}
