let arr1 = [5, 22, 3, 6, 42, 2, 10];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    }

    if (arr[i] > arr[indexOfMin]) {
      [ arr[i], arr[indexOfMin] ] = [ arr[indexOfMin], arr[i] ];
    }
  }

  return arr;
}

console.log(selectionSort(arr1));