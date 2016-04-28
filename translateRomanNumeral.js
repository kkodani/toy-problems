function translateRomanNumeral (romanNumeral) {

    var result = 0;

    for(var i=0; i<romanNumeral.length; i++) {

        var current = DIGIT_VALUES[romanNumeral[i]];
        var next = DIGIT_VALUES[romanNumeral[i+1]];

        if(current === undefined) {
            return "null";
        }

        if(next !== undefined && next > current) {
            result-=current;
        }
        else {
            result+=current;
        }
    }

    return result;
}
