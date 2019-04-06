const quick_sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const [head, ...tail] = arr;
  const less = tail.filter(item => item <= head);
  const greater = tail.filter(item => item > head);

  return [...quick_sort(less), head, ...quick_sort(greater)];
}


const arr = [200, 390, 441, 449, 2109, 2, 5, 12, 25, 42, 66, 167];

console.log(quick_sort(arr));