function coinSums (total) {
    var count = 0;

    var recurse = function(moneys, lastCoinAdded) {
        if(moneys === total) {
            count++;
            return;
        }
        if(moneys > total) {
            return;
        }
        for(var i=0; i<coins.length; i++) {
            if(coins[i] >= lastCoinAdded) {
                recurse(moneys+coins[i], coins[i]);
            }
        }
    };

    recurse(0, 0);
    return count;
}
