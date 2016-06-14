/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    nums.sort(function(a, b) {return a-b});
    for(var i=0; i<nums.length-1; i++) {
        if(nums[i] === nums[i+1]) {
            return true;
        }
    }

    /*
    for(var i=0; i<nums.length; i++) {
        for(var j=i+1; j<nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    */
    return false;
};
