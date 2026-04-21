class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let freqmap = new Map();
      for(let num of nums){
        freqmap.set(num, (freqmap.get(num) || 0) + 1)
      }
      let buckets = Array.from({length: nums.length + 1}, ()=> []);
        for (let [num, freq] of freqmap) {
        buckets[freq].push(num);
    }

    let result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
    }
}
