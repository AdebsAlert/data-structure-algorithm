//PSEUDOCODE

// BRUTE FORCE:

/**
 * brute force option would be to iterate over the nums array and 
 * then a second loop to interate over the remaining numbers to check if it sums up to target
 * this solution works with a big O of O(n^2) but can be optimized for performance
 */


// IDEAL SOLUTION

/**
 * Iterate over the numbers array, for each inetrated value, subtract the target from the iterated number
 * save the subtracted value as the key in a hashmap with the iterating indice being the value in the hashmap
 * if the subtracted value from the target is present in the hashmap, return the current iterating indice and the index of the subtracted value in the hashmap
 * 
 */


 var twoSum = function(nums, target) {

    const hashMap = {};

    for(let i = 0, len = nums.length; i < len; i++) {
        let currentVal = nums[i]

        const toFind = target - currentVal;

        // look for toFind in the hashmap
        if(hashMap[toFind]) return [hashMap[toFind], i];

        // its not, store the current value in the hashmap
        hashMap[currentVal] = i
    }
    return null;
};