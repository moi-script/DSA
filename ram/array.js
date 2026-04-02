// Array 

// -- Elements, Ordered, Zero, Indexed, heterogeneous
// Array.isArray();


const randomNum = Array.from(({length : 10}), () => {
    const rand = Math.floor(Math.random() * 10)
    return rand    
})

console.log(randomNum);
