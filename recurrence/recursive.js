

let fnList = [];
let iterationCount = 0;
function loops(iterationCount, fnList, fnConsole) {
    if (iterationCount === 5) {
        console.log('Fn list result :: ', fnList)
        return fnList;
    }
    iterationCount++;


    if(typeof fnConsole === 'function') {
        fnConsole("Iteration count :: ", iterationCount);
    }
    console.log('Next')

    if(Array.isArray(fnList)) fnList.push(loops) 
    
     return loops(iterationCount, fnList, fnConsole);
}


function getLoops(fnList){
    console.log("fn list first index :: ", fnList[0](0, [], console.log)[0](0, [], console.log)[0](0, [], console.log)[0](0, [], console.log)[0](0, [], console.log))
    // fnList.forEach((fn) => {
    //     console.log("Result :: ", fn(1, []))
    // })

}

// getLoops(loops(iterationCount, fnList, undefined))

// console.log(typeof undefined);