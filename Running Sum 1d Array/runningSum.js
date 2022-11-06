var runningSum = function(nums) {

    // loop the array starting from index 1
    for(let i = 1, len = nums.length; i < len; i++){

        // add the previous index value to the current indice
        nums[i] += nums[i - 1]
    }

    return nums
};