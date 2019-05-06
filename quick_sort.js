const arr = [200, 390, 441, 449, 2109, 2, 5, 12, 25, 42, 66, 167];

const quick_sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  // !IMPORTANT to use middle for pivot:
  // O(N logN) - best and average case
  // but if we take first or last el for pivot and trying it on sorted array
  // we'll end up with O(n^2)

  // with 6 items in the sorted array there will be 3 calls for pivot in the middle and 6 calls for first/last index
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const less = arr.filter(item => pivot > item);
  const greater = arr.filter(item => pivot < item);

  return [...quick_sort(less), pivot, ...quick_sort(greater)];
}

console.log(quick_sort(arr));
