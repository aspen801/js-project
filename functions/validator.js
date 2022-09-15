// for testing by Jest

const makeValidator = () => {
  const obj = {
    checks: [],
    addCheck: (fn) => {
      obj.checks.push(fn);
    },
    isValid: (value) => {
      const results = obj.checks.map((check) => check(value));

      return (!results.includes(false) ?  true :  false);

    },
  };

  return obj;
};

export default makeValidator;