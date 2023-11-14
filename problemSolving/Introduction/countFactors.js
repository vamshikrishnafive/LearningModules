function solve(A) {
    let count = 0;
    for (let i = 1; i * i <= A; i++) {
        if (A % i == 0) {
            if (i * i == A) count += 1; else count += 2;
        }
    };
    return count;
};

const A = 24;
console.log(`count factors of ${A} is`, solve(A));