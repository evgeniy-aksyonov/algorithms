function fizzBuzz(num) {
  for (let index = 1; index <= num; index++) {
    let result = (index % 5 === 0) && (index % 3 === 0) ? 'fizzbuzz' :
                 (index % 3 === 0) ? 'fizz' :
                 (index % 5 === 0) ? 'buzz' :
                 index;

    console.log(result);
  }
}

fizzBuzz(15);
