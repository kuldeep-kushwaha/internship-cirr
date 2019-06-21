function factorial (n) {
  return n
  ? n * factorial(n - 1)
  : 1
}

const trampoline = (fn) => {
    while (typeof fn === 'function') {
    console.log(typeof fn === 'function',"ss");
        fn = fn();
    }
    return fn;
};

console.log(trampoline(factorial(30000000000)));