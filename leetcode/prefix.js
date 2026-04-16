var longestCommonPrefix = function (strs) {
    if (!strs.length || strs[0].length === 0) return "";
    
    let result = "";
    let isMatch = true;

    while (isMatch) {
        let firstChar = strs[0][0]; // Take the first char of the first word
        
        // If the first word is empty, we are done
        if (firstChar === undefined) break;

        for (let i = 0; i < strs.length; i++) {
            // Check if other words match or are empty
            if (strs[i][0] !== firstChar || strs[i].length === 0) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            result += firstChar;
            // "Eat" the first character of every word
            for (let i = 0; i < strs.length; i++) {
                strs[i] = strs[i].slice(1);
            }
        }
    }
    return result;
}