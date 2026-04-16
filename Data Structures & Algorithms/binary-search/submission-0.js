class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let left = 0;
       let right = nums.length - 1;
       while(left <= right){
        let middleIndex = Math.floor((left + right) / 2);
        if(nums[middleIndex] === target){
            return middleIndex;
        }else if(target < nums[middleIndex]){
            right = middleIndex - 1;
        }else{
            left = middleIndex + 1;
        }
       }
      return -1;
    }
}
