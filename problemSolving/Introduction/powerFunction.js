function solve(A, B) { // 2, 3
    let result = 1;
    for(let i = 1; i <= B; i++) {
        result = result * A;
    }
    return result;
};

const A = 2, B = 2;
console.log(`${A} raise to ${B} is`, solve(A, B));