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

// Usage:

// function slowFunc(args) {
//   ...
// }

// const fastFunc = memoize(slowFunc);

// fastFunc(args);
