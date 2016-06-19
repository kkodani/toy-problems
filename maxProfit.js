/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0;
    var lowest = prices[0];

    for (var i = 0; i < prices.length; i++) {
        if (prices[i] > lowest && (prices[i] - lowest > max)) {
            max = prices[i] - lowest;
        }
        if (prices[i] < lowest) {
            lowest = prices[i];
        }
    }

    return max;
};
