class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};
        for(let i = 0; i < strs.length; i++){
            let sorted = strs[i].split("").sort().join("");
            if(!obj[sorted]){
               obj[sorted] = []
            }
             obj[sorted].push(strs[i])
        }
        return Object.values(obj)
    }
    
}
