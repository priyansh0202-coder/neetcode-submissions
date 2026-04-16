class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right){
            let middleIndex = Math.floor((left + right) / 2);
            if(nums[middleIndex] === target){
                return middleIndex;
            }else if(nums[middleIndex] < target){
                left = middleIndex + 1
            }else{
                right = middleIndex - 1
            }
        }
         return left;
    }
}
