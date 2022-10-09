function magic(...numbers) {
  let sum = 0;
  sum += numbers.reduce((a, b) => a + b);
  function inner(...args) {
    return magic(sum, ...args);
  }
  inner.valueOf = function () {
    return sum;
  };
  return inner;
}

console.log(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2)(10)(10) == 33);
