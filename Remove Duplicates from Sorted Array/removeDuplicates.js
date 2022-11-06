function removeDuplicates(nums) {
    const len = nums.length;
    if(len === 0) {
        return 0;
    }
    //start insertIndex at 1 as we're guaranteed to not have seen the value at 0
    let insertIndex = 1;
    //same goes for the loop
    for(let i = 1; i < len; i++) {
        //if the value at i is different from the one before it
        if(nums[i] !== nums[i - 1]) {
            //then modify the value of insertIndex *in place* to the value of i
            nums[insertIndex] = nums[i];
            //now we can increment the insertIndex
            insertIndex++
        }
    }

    console.log(nums)
    //we can use the insertIndex as the return since it is
    //equivalent to the num of unique values
    return insertIndex;
};
