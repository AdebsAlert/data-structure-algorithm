//PSEUDO CODE

// binary search works by spliting a sorted array into 2
// compare the middle of the division to the search value
// if its less than the middle, divide the left part of the division by 2 till you find the search value
// if its more  than the middle, divide the right part of the division by 2 till you find the search value

const bSearch = function(arr, search) {
    let lowIndex = 0;
    let highIndex = arr.length - 1;

    while (lowIndex <= highIndex) {
        let middle = lowIndex + Math.floor((highIndex - lowIndex) / 2);

        if(arr[middle] === search) return middle;

        if(search < arr[middle]) {
            highIndex = middle - 1;
        }else{
            lowIndex = middle + 1;
        }

    }

    return -1
}
