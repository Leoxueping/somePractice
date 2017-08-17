function Fibonacci1(n, total1=0, total2=1) {
    if(n === 0) return total1;
    return Fibonacci1(n-1, total2, total1+total2);
}

function Fibonacci(n) {
    // write code here
    let f0 = 0,
        f1 = 1,
        fn;
    if(n < 2) return n;
    for(let i = 1; i < n; i ++) {
        fn = f1 + f0;
        f0 = f1;
        f1 = fn;
    };
    return fn;
}

function Fibonacci2(n) {
    if(n < 2) return n;
    return Fibonacci2(n-1) + Fibonacci2(n-2);
}

