/*
leetcode #5: https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),

*/

longestPalindrome = (s) => {
    if(s.length === 0) return "";
    
    let longest = s[0];
    for(let i = 0; i < s.length; i++){
        const substring1 = expandFromCenter(s, i - 1, i + 1);
        const substring2 = expandFromCenter(s, i, i + 1);
        
        longestAmongSubstrings = substring1.length > substring2.length ? substring1 : substring2;
        longest = longestAmongSubstrings.length > longest.length ? longestAmongSubstrings : longest;
    }
    return longest; 
  }
  
  expandFromCenter = (s, left, right) => {
    if(s.length === 0) return "";
    
    let substring = "";
    while(left >= 0 && right < s.length){
        if(s[left] !== s[right]) break;

        substring = s.slice(left, right + 1);
        left--;
        right++;
    }
    return substring;
  }

  /*
  Time complexity
  Space complexity
  Test cases
  */