/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort(function(a, b) {return a-b;});

    var count = 0;
    var prev = nums[0];

    for(var i=0; i<nums.length; i++) {
        if(prev !== nums[i]) {
            count = 1;
            prev = nums[i];
        }
        if(prev === nums[i]) {
            count++;
        }
        if(count > nums.length/2) {
            return nums[i];
        }
    }
};
