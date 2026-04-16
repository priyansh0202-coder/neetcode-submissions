class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
      let set2 = new Set(nums2);
      let result = new Set();
      for(let i = 0; i < nums1.length; i++){
        if(set2.has(nums1[i])){
             result.add(nums1[i])
        }
      }
      return [...result];
    }
}
