

// Compare the first element with the second element.

// If the first is greater than the second, swap them.

// Move to the next pair and repeat until you reach the end of the array.

// Repeat the entire process for the whole array until no more swaps are needed.


function bubbleSort(arr, length) {
    for(let i =0; i < length; i++ ){
        for(let j = 0; j<length - 1; j++){
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}


const ars = [10, 2, 40]

// best case -> 0(n); when array is already optimized and sorted

// average case -> 0(n^2) -> normal performance for random data;
// worst case 0(n^2) -> when sorted in reverse order



console.log(bubbleSort(ars, ars.length));