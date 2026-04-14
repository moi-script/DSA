function selectionSort(arr) {
    const n = arr.length;

    // Loop through the array. 
    // We stop at n - 1 because the last element will naturally be sorted.
    for (let i = 0; i < n - 1; i++) {
        
        // Step 1: Assume the first unsorted element is the smallest
        let minIndex = i;

        // Step 2: Scan the rest of the unsorted array to see if there's a smaller number
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                console.log('Arr[j] --> ', arr[j])
                // We found a new smallest number, remember its index!
                minIndex = j; 
            }
        }
        console.log('Min index --> ', minIndex)

        // Step 3: If we actually found a smaller number, swap them
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // ES6 Destructuring Swap
        }
    }

    return arr;
}

// --- Example Usage ---
const myArray = [29, 10, 14, 37, 13];
console.log("Sorted Array:", selectionSort(myArray));