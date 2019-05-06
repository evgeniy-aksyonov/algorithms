const binary_search = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2);
    const guess = list[midIndex];

    if (guess === item) {
      return midIndex;
    }

    if (item < guess) {
      high = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }

  return null;
}

const arr = [2, 5, 12, 25, 42, 66, 167, 200, 390, 441, 449, 2109];

console.log(binary_search(arr, 42)); // 4
console.log(binary_search(arr, -1)); // null