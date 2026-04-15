

let repeatition = 0;


function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i); 
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;          

    let left = 2 * i + 1;     
    console.log("i  ::", i);

    console.log("Left  ::", left);
    let right = 2 * i + 2;   
    console.log("Right  ::", right);



    console.log("arr[left] -->", arr[left]);
    console.log("arr[right] -->", arr[right]);

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        
        heapify(arr, n, largest);
    }
    repeatition++;
}

const myArray = [90, 89, 56, 33, 68, 45, 21, 7, 4, 32];
console.log("Sorted Array:", heapSort(myArray));

console.log("Repeatition ::", repeatition);
