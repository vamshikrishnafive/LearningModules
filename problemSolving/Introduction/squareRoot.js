function solve(A) { // 4
    if (A == 1) return 1;
    for (let i = 2; i * i <= A; i++) {
        if (i * i == A) return i;
    };
    return -1;
};

const A = 625;
console.log(`${A} square root is`, solve(A));