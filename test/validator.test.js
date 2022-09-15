import makeValidator  from '../functions/validator.js'

const validator = makeValidator();

validator.addCheck((v) => v > 5);


console.log(validator.checks[0]);