const binary_search = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    console.log('mid: ', mid);
    const guess = list[mid];
    console.log('guess: ', guess);

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
      console.log('high: ', high);
    } else {
      low = mid + 1;
      console.log('low: ', low);
    }
  }

  return null;
}

const arr = [2, 5, 12, 25, 42, 66, 167, 200, 390, 441, 449, 2109];

console.log(binary_search(arr, 42)); // 4
console.log(binary_search(arr, -1)); // null