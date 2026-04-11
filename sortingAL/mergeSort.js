
function merge(left, right) {
    let result = [];
    // console.log("From merge fn :: ", left);
    // console.log("From merge fn :: ", right);
    

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        // console.log('Left Index :: ', leftIndex);
        // console.log('Left value from index :: ', left[leftIndex]);

        // console.log('Right Index :: ', rightIndex);
        // console.log('Right value from index :: ', right[rightIndex]);
        if (left[leftIndex] < right[rightIndex]) {



            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex])


            rightIndex++;
        }
    }


    console.log('Right slice :: ',...right.slice(rightIndex))
    console.log('Left slice :: ', ...left.slice(leftIndex))

    
    return [ ...result, ...right.slice(rightIndex), ...left.slice(leftIndex) ];
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    // console.log(mid)

    const left = arr.slice(0, mid);
    // console.log("left ::", left);
    const right = arr.slice(mid);
    // console.log("Right ::", right);


    const res = merge(mergeSort(left), mergeSort(right)) 
    console.log("Res ::", res);
    return res;
}

const numbers = [38, 27, 43, 3, 9, 82, 10];


console.log(mergeSort(numbers));


// average case --> 0(nlogn)
// best case --> 0(nlogn)
// worst case --> 0(nlogn)

// space complexity 0(n)


