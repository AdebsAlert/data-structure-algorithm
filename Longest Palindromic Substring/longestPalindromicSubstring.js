
// PSEUDOCODE

/**
 * 
 * From the centre of the string, assign two pointers left and right. 
 * continuosly check the left value is equal to the right using recursion to get the longest palindrome
 * in the case of an even word (eg ABAA), the center of the string will br the 2 characters in the middle
 * then compare the length of both the odd subscring and even substring
 * return the longest
 */




 var longestPalindrome = function(s) {
    let longestStr = '';

    for(let i = 0, len = s.length; i < len; i++) {
        let odd = expandFromCenter(s, i, i) // i and i is the same because the left and right pointer points to the same characters

        let even = expandFromCenter(s, i - 1, i) // i - 1 is left while i is right

        if(odd.length > longestStr.length) {
            longestStr = odd
        }

        if(even.length > longestStr.length) {
            longestStr = even
        }
    }

    return longestStr
};

const expandFromCenter = function(string, left, right) {

    let i = 0;

    while(string[left - i] && string[left - i] === string[right + i]) {
        i++
    }
    i--

    return string.slice(left - i, right + i + 1)

}
