class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
 isAlphanumeric (str){
    return /^[a-z0-9]+$/i.test(str);
 } 

    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
     while(left < right){
      if(!this.isAlphanumeric(s[left])){
        left++; continue;
   }
      if(!this.isAlphanumeric(s[right])){
        right--; continue;
   }
if(s[left].toLowerCase() != s[right].toLowerCase()){
    return false;
}
left++; right--;
     }
     return true;
    }
}
