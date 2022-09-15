import makeValidator  from '../functions/validator.js'

test('validator', () => {
    const validator = makeValidator();
    validator.addCheck((n) => n > 5);
    validator.addCheck((n) => n === 6);
    validator.addCheck((n) => n%2 === 0);
    expect(validator.isValid(6)).toEqual(true);
    expect(validator.isValid(5)).toEqual(false);
  });