let arr = [2, 5, 1, 10, 9];

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let item = arr.splice(i, 1);

        // 1st arg - index where to insert, 
        // 2nd argument is 0 - so it will insert the elem instead of removing,
        // 3rd argument is element itself
        arr.splice(j, 0, item[0]); 
      }
    }
  }

  return arr;
}

console.log(insertionSort(arr));
