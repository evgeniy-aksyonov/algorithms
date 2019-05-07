let arr = [14, 5, 11, 65, 123, 50, 1, 222, 123, 55, 98];

function bubbleSort(arr) {
  for (let i = (arr.length - 1); i >= 0; i--) {
    for (let j = (arr.length - i); j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [ arr[j-1], arr[j] ] = [ arr[j], arr[j-1] ];
      }
    }
  }

  return arr;
}

console.log(bubbleSort(arr));
