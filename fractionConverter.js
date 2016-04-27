var countDecimals = function(num) {
    var numString = num.toString();
    var numSplit = numString.split('.');
    var decimals = numSplit[1];
    if(decimals !== undefined) {
      return decimals.length;
    }
    return 0;
};


var findGCD = function (numer, denom) {
    if (denom === 0) {
        return numer;
    }
    else {
        return findGCD(denom, numer % denom);
    }
};

function fractionConverter (number) {
    var numerator = number;
    var fraction = "";
    var denominator = 1;
    var decimalCounter = countDecimals(number);

    for(var i=0; i<decimalCounter; i++) {
        numerator = numerator*10;
        denominator = denominator*10;
    }

    numerator = numerator.toFixed();
    denominator = denominator.toFixed();

    console.log(numerator);

    var gcd = findGCD(numerator, denominator);

    numerator = numerator/gcd;
    denominator = denominator/gcd;

    return numerator+"/"+denominator;
}
