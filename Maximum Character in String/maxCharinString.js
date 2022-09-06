//PSEUDO CODE

// create a hash map to save the count pf each character in the string
// keep track of the current max count in a variable
// iterate over every character in the string
// store the the occurence of each character in the hash map
// compare if the occurence is the maax count and return if it is

const maxCharStr = function (str) {
    let result = ''
    let currentMaxCount = 0
    let hMap = {};

    for(let i = 0, len = str.length; i < len; i++) {
        const currentChar = str[i];

        hMap[currentChar] = hMap[currentChar] + 1 || 1

        if(hMap[currentChar] > currentMaxCount) {
            result = currentChar
            currentMaxCount = hMap[currentChar]
        }
    }


    return result
}
