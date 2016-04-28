var shuffleDeck = function(deck) {
    var copied = deck.slice(0, deck.length);
    var shuffled = [];

    for(var i=0; i<deck.length; i++) {
      var randomIndex = Math.floor((Math.random() * copied.length));
      shuffled.push(copied[randomIndex]);
      copied.splice(randomIndex, 1);
    }

    return shuffled;
  };
