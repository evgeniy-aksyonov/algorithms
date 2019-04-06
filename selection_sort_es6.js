const selectionSort = (array) => {
  for (let i = 0; i < array.length; ++i) {
    let indexOfMin = i;
    for (let j = i + 1; j < array.length; ++j) {
      if (array[j] < array[indexOfMin]) indexOfMin = j;
    }
    [ array[i], array[indexOfMin] ] = [ array[indexOfMin], array[i] ];
  }
  return array;
}

let arr1 = [5, 22, 3, 6, 42, 2, 10];

console.log(selectionSort(arr1));