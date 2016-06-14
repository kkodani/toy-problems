/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    var results = [];

    // nums1.sort(function(a,b) {return a-b});
    // nums2.sort(function(a,b) {return a-b});

    // var index1 = 0;
    // var index2 = 0;

    // while (index1 < nums1.length && index2 < nums2.length) {
    //     if(nums1[index1] === nums2[index2]) {
    //         results.push(nums1[index1]);
    //         index1++;
    //         index2++;
    //     }
    //     else if(nums1[index1] < nums2[index2]) {
    //         index1++;
    //     }
    //     else {
    //         index2++;
    //     }
    // }



    for(var i=0; i<nums1.length; i++) {
        for(var j=0; j<nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                nums2.splice(j,1);
                results.push(nums1[i]);
                j--;
                break;
            }
        }
    }

    return results;

};
