/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if (nums.length === 0){
        return 0;
    }

    var robbedmoney = [];

    for (var i = 0; i < nums.length; i++){
        if(i === 0) {
            robbedmoney[i] = nums[i];
        }
        else if(i === 1) {
            robbedmoney[i] = Math.max(nums[i], nums[i-1]);
        }
        else {
            robbedmoney[i] = Math.max(robbedmoney[i - 2] + nums[i], robbedmoney[i-1]);
        }
    }

    return robbedmoney[nums.length - 1];
};
