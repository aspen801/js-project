const makeRational = (num, denom) => ({
  rational: {num, denom},
  getNumer() {
    return this.rational.num;
  },
  getDenom() {
    return this.rational.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`
  },
  add(rational) {
    const lcd = this.getDenom() * rational.getDenom();
    const amplifiers = {};
      for (let i = 1; i < lcd; i++) {
        if (this.getDenom() * i === lcd) {
          amplifiers.amp1 = i;
        }
      }
      for (let i = 1; i < lcd; i++) {
        if (rational.getDenom() * i === lcd) {
          amplifiers.amp2 = i;
        }
      }


   const newNumer = (this.getNumer()  * amplifiers.amp1 + rational.getNumer() * amplifiers.amp2);
   const newDenom = lcd;
   return makeRational(newNumer, newDenom);
  }
})

const rat1 = makeRational(3, 9);
const rat2 = makeRational(10, 3);

const rat3 = rat1.add(rat2);
console.log(rat3.toString());

