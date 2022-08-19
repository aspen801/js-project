//Rest operator usage  

const sum = (...nums) => {
  if (nums.length === 0) {
    return null;
  }
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
};

let result = sum(9, 2, 4, 6, 1);
console.log(result);
result = sum();
console.log(result);
