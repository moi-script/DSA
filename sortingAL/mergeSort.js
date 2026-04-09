
function merge(left, right) {
    let result= [];

    let leftIndex= 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }


    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];



    
}