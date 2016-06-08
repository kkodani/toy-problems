/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeros = 0;
    for(var i=0; i<nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            zeros++;
            i--;
        }
    }
    for(i=0; i<zeros; i++) {
        nums.push(0);
    }
    //return nums;
};
