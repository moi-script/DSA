

// will try to implement some 


/**
 * Main Quick Sort function.
 * Uses default parameters to set the initial bounds on the first call.
 */


function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the final index of the pivot
        const pivotIndex = partition(arr, low, high);
        
        // Recursively sort the sub-array to the left of the pivot
        quickSort(arr, low, pivotIndex - 1);
        
        // Recursively sort the sub-array to the right of the pivot
        quickSort(arr, pivotIndex + 1, high);
    }
    
    // Return the sorted array (though it sorts in-place, this is helpful for chaining)
    return arr; 
}

/**
 * Handles the swapping and returns the final index of the pivot.
 */

function partition(arr, low, high) {
    // Step 1: Choose the rightmost element as the pivot
    const pivot = arr[high];
    
    // Pointer for the boundary of elements smaller than the pivot
    let i = low - 1;
    console.log("I -> ", i);
    
    // Step 2: Compare each element to the pivot
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            // If smaller, move the boundary forward and swap
            i++;
            // ES6 Destructuring assignment to swap elements


            console.log('arr[i]', arr[i]);
            console.log('arr[j]', arr[j]);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    // Step 3: Place the pivot in its correct sorted position
    // Swap the pivot (at index 'high') with the first element larger than it
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    
    return i + 1;
}

// --- Example Usage ---
const myArray = [3, 5, 2, 10, 9];
console.log("Original Array:", myArray);

quickSort(myArray);
console.log("Sorted Array:  ", myArray);