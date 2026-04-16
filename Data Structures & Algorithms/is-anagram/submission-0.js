class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = {};
        let count2 = {};
        if(s.length !== t.length){
            return false
        }
        for(let char of s ){
            count[char] = (count[char] || 0) + 1;
        }
        for(let char2 of t){
         count2[char2] = (count2[char2] || 0) + 1;
        }
        for(let key in count){
            if(count[key] !== count2[key]){
                return false;
            }
        }
        return true;
    }
}
