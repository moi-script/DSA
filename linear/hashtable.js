
// What is hashing ? 

// It must be deterministic
// Fixed length output 
// Irreversible output (cannot be reverse engineered)

function hashify(a, b) {
    const sum = a + b;
    return sum % 10;
}

console.log(hashify(200, 3000)); // fixed single digit output

// For a large complex data structures in js

// we can use the Map 

// get
// set
// size
// delete
// clear
// has
// forEach
// entries
// keys
// values
// groupBy


// Using weakmap for storing object as keys -> it uses a garbage collectors



