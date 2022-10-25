/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//TODO:
// Sort the arrays onf intervals using the first indice of each array
// Compare the second indice of the array to the first indice of the next array
// If the next array first indice is less than the second indice of the first array
// That means there is an overlapping interval
// Merge the two arrays using the first indice of the first array and the second indice of the second array
var merge = function(intervals) {
    // sort the array of intervals
    intervals.sort((a, b) => a[0] - b[0]);

    const resultInterval = [intervals[0]]

    for(let i = 0, len = intervals.length; i < len; i++) {

        let currentInterval = intervals[i];
        let lastResultInterval = resultInterval[resultInterval.length - 1];

        if(lastResultInterval[1] >= currentInterval[0]) {
            lastResultInterval[1] = Math.max(lastResultInterval[1], currentInterval[1])
        }else{
            resultInterval.push(currentInterval)
        }
    }


    return resultInterval
    
};