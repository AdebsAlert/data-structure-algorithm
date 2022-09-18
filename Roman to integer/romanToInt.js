// PSEUDOCODE

/**
 * 
 * create a hash map with the value of each synol in the roman numeral
 * initiale the result number with 0
 * iterate the roman string
 * check the current string value in the hash if its less than the next character value
 * if its less than the next, subtract it from the next character. (case of IV)
 * 
 */

 var romanToInt = function (s) {
    const romanHash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for(let i = 0, len = s.length; i < len; i++) {
        const currentVal = romanHash[s[i]];
        const nextCharVal = romanHash[s[i + 1]];

        if(currentVal < nextCharVal) {
            result += nextCharVal - currentVal;
            i++
        }else{
            result += currentVal;
        }
    }

    return result;
}