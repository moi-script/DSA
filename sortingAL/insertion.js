

function insertionSort() {
    
    let randoms = Array.from({ length: 10 }, (_, i) => {
        let rand = Math.round(Math.random() * 10);
        return rand
    })

    for (let i = 1; i < randoms.length; i++) {
        let key = randoms[i];
        let j = i - 1

        while (j >= 0 && randoms[j] > key) {
            randoms[j + 1] = randoms[j];
            j = j - 1;
        }

        randoms[j + 1] = key;
    }


    return randoms;
}







console.log(insertionSort());