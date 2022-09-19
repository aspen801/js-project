// Ratioanal fractions abstraction

const greatestCommonDivisor = (rationalNumer, rationalDenom) => {
  rationalNumer = Math.abs(rationalNumer);
  rationalDenom = Math.abs(rationalDenom);
  while (rationalDenom) {
    const t = rationalDenom;
    rationalDenom = rationalNumer % rationalDenom;
    rationalNumer = t;
  }
  return rationalNumer;
};

const lowestCommonDenominator = (denom1, denom2) => denom1 * denom2;

const getAmp = (lcd, denom1, denom2) => {
  const amplifiers = {};
  for (let i = 1; i < lcd; i++) {
    if (denom1 * i === lcd) {
      amplifiers.amp1 = i;
    }
  }
  for (let i = 1; i < lcd; i++) {
    if (denom2 * i === lcd) {
      amplifiers.amp2 = i;
    }
  }
  return amplifiers;
};

const makeRational = (numer, denom) => {
  const gcd = greatestCommonDivisor(numer, denom);
  return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = (rational) => rational.numer;

const getDenom = (rational) => rational.denom;

const ratToString = (rational) => `${getNumer(rational)}/${getDenom(rational)}`;

const add = (rational1, rational2) => {
  const lcd = lowestCommonDenominator(getDenom(rational1), getDenom(rational2));
  const amplifiers = getAmp(lcd, getDenom(rational1), getDenom(rational2));
  return {
    numer: (rational1.numer * amplifiers.amp1 + rational2.numer * amplifiers.amp2),
    denom: lcd,
  };
};

const sub = (rational1, rational2) => {
  const lcd = lowestCommonDenominator(getDenom(rational1), getDenom(rational2));
  const amplifiers = getAmp(lcd, getDenom(rational1), getDenom(rational2));
  return {
    numer: (rational1.numer * amplifiers.amp1 - rational2.numer * amplifiers.amp2),
    denom: lcd,
  };
};

const rational1 = makeRational(2, 3);
const rational2 = makeRational(5, 7);

console.log(ratToString(add(rational1, rational2)));
console.log(ratToString(sub(rational1, rational2)));
