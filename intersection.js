/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort(function(a, b) {return a - b;});
    nums2.sort(function(a, b) {return a - b;});
    var results = [];
    var index1 = 0;
    var index2 = 0;

    if(nums1 && nums2) {
        while(index1 < nums1.length && index2 < nums2.length) {
            if(nums1[index1] === nums2[index2]) {
                results.push(nums1[index1]);
                while(nums1[index1] === nums2[index2]) {
                    index1++;
                }
            }
            else if(nums1[index1] < nums2[index2]) {
                index1++;
            }
            else {
                index2++;
            }
        }
    }

    return results;
};
