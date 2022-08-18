let primeOrNot = (num) => {
  if (num % num === 0 && num % 1 === 0 && num > 0) {
    return true;
  }
};

const sayPrimeOrNot = (num) => {
  if (primeOrNot(num) === true) {
    console.log('Yes');
  } else console.log('No');
};

sayPrimeOrNot(2);
