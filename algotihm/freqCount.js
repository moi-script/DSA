
const ars = Array.from(({length : 1000}), (_, i) => {
    return i
})

function frequency(arr, length) {
    let s = 0; // 1
    for(let i = 0; i<length; i++) { // n+ 1
        s = s + arr[i] // n
    }
    return s // 1  
    // 1 + (n + 1) + n + 1
    // = f(n) = 2n + 3
}


// function matrixMult(arr1, arr2, result, length) { 
//     for(let i =0; i< length; i++) { // n + 1
//         // n
//         for(let j =0; i<length; j++) { // n(n + 1) 
//             result[i, j] = arr1[i, j] + arr2[i, j]; // n * n
//         }
//     }

//     return result; // 1
 
//     // f(n) = n + (n+1) + (n+1) + n * n + 1
//     //  2n + n^2 + 3

// }






// console.log(frequency(ars, ars.length))



function multiplyMatrices(matrixA, matrixB) {
    const m = matrixA.length;          // Rows in Matrix A // 1
    const n = matrixA[0].length;       // Cols in Matrix A (must equal Rows in B) // 1 
    const p = matrixB[0].length;       // Cols in Matrix B // 1
    const rowsB = matrixB.length; // 1

    // 1. Definiteness check: Ensure matrices can be multiplied
    if (n !== rowsB) {
        throw new Error("Incompatible matrices: Columns of A must match Rows of B."); // 1
    }

    // 2. Space Complexity Allocation: O(m * p)
    // Create an m x p resulting matrix filled with 0s
    let matrixC = new Array(m); // n
    for (let i = 0; i < m; i++) { // n+ 1
        matrixC[i] = new Array(p).fill(0); // n * N
    }

    // 3. Time Complexity Execution: O(m * n * p)
    for (let i = 0; i < m; i++) {           // Loop through rows of A // n + 1
        for (let j = 0; j < p; j++) {       // Loop through columns of B // n(n+1)
            for (let k = 0; k < n; k++) {   // Calculate the dot product // n*n(n+1)
                matrixC[i][j] += matrixA[i][k] * matrixB[k][j]; // n*n*n
            }
        }
    }

    return matrixC; // 1

    // S(n) = n + (n+1) + n(+1) + n(n+1) + n*n(n + 1) + n*n*n + 6
    // S(n) = 5 +1 + n + (n + 1) + (n+1) + n(n+1) + n*n(n+1) + n*n*n + 1
}


// --- Example Usage ---

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
]; // Dimensions: 3x2

const B = [
    [7, 8, 9],
    [10, 11, 12]
]; // Dimensions: 2x3

// Resulting matrix will be 3x3
const result = multiplyMatrices(A, B);
console.table(result);