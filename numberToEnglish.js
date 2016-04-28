function numberToEnglish (number) {
  var word = '';

  if(number < 100) {
      return smallNums(number);
  }

  if(number >= 100 && number < 1000) {
      return medNums(number)
  }

  if(number >= 1000) {
      return bigNums(number)
  }

  return word;
}

function smallNums(number) {
    var word = '';

    if(number < 20) {
        return numbersToWords[number];
    }

    for(var k in numbersToWords) {
      var remainder = number % k;
      var divider = Math.floor(number / k);
      if(divider === 1 && k >= 20 && remainder >= 0 && remainder <= 9) {
        word += numbersToWords[k];
        if(remainder !== 0) {
            word += '-' + numbersToWords[remainder];
        }
      }
    }
    return word;
}

function medNums(number) {
    var word = '';
    var divider = Math.floor(number / 100);
    var remainder = number % 100;
    word += numbersToWords[divider] + ' ' + numbersToPlace[100];
    if(remainder > 0) {
      word += ' ' + smallNums(remainder);
    }
    return word;
}

function bigNums(number) {
  var word = '';
  for(var k in numbersToPlace) {
        var remainder = number % k;
        var divider = Math.floor(number / k);
        if(k >= 1000 && divider >= 1 && divider <= 999) {
            word += numberToEnglish(divider) + ' ' + numbersToPlace[k];
            if(remainder > 0) {
                word += ' ' + numberToEnglish(remainder);
            }
        }
  }
  return word;
}
