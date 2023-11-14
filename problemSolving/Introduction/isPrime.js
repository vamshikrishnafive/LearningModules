function solve(A) {
    let count = 0;
    if (A == 0 || A == 1) {
        return 0;
    }
    for (let i = 2; i * i <= A; i++) {
        if (Number(A) % i == 0) {
            count = 1;
            break;
        }
    };
    if (count == 0) return 1; else return 0;
};
const A = 12;
console.log(`${A} is Prime number`, solve(A) ? "Yes" : "No" );