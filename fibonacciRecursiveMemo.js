function memoize(fn) {
  let cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// const fastFib = memoize(fib); 
// !IMPORTANT NOTE:
// If we will assign memoized(fast) version of fib to fastFib
//  --> then we need to use MEMOIZED(FAST) version for recursion calls:

// function fib(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fastFib(n - 1) + fastFib(n - 2);
//   }
// }

// So to avoid bugs - it's better to REASSIGN slow function to memoized(fast) one:
fib = memoize(fib); 

console.log(fib(31));

