var romanToInt = function (s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // If current value is less than the next one, subtract it (e.g., IV)
        if (current < next) {
            result -= current;
        } else {
            // Otherwise, add it (e.g., VI or II)
            result += current;
        }
    }

    return result;
};