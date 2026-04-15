/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let n = s.length;
     const romanMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
     ]);
     
     const trailings = new Map([
        ["I", {"V" : 5, "X" : 10}],
        ["X", {"L" : 50, "C" : 100}],
        ["C", {"D" : 500, "M" : 1000}],
     ])

     



     s.forEach((strRoman, index) => {
        const trailersValueObject = trailings.get(strRoman)

        if(!trailersValueObject) {

        }

        romanMap.forEach(([roman, value], i) => {
            const currentRoman = s[index];

             if((n - 2) >= index &&  strRoman === roman) {
                const nextRoman = s[index + 1];
                result += value


            if(trailings.keys().includes(strRoman) && Object.keys(trailersValueObject).includes(nextRoman)) {
                let subtractResult = Object.keys(trailersValueObject)[next] - value
                result += subtractResult;
            }

            }
        })
       
     })

     
};