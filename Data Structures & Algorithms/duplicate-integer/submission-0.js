class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};
        for(let i=0; i<nums.length;i++){
            if(!obj[nums[i]]){
                obj[nums[i]] = true;
            }else if(obj[nums[i]]){
              return true;
            }
        }
        return false;
    }
}
