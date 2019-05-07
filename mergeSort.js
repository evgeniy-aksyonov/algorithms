let arr1 = [14, 5, 11, 65, 123, 50, 1, 222]; // 8 numbers (even)
let arr2 = [14, 5, 11, 65, 9]; // 5 numbers (odd)

// split given array into 2 separate arrays recursively
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);

  // slice(from, toButNotIncluding)
  const left = arr.slice(0, center);

  // second arg is optional (will go from center to the end of array if 2nd arg is not provided)
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

// merge 2 SORTED arrays
function merge(left, right) {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));