// Converts an array of dates to an array of human-readable English strings

const convert = (...dates) => {
  const dateStrings = [];
  let i = 0;

  for (const date of dates) {
    const d = new Date(date);
    dateStrings[i] = d.toDateString();
    i += 1;
  }

  return dateStrings;
};

console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
