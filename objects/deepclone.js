import _ from 'lodash';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

const obj = {};

const deepClone = (newObj, clonedObj) => {
  const keys = Object.keys(clonedObj);

  const innerObj = {};
  for (const key of keys) {
    if (_.isObject(clonedObj[key])) {
      newObj[key] = deepClone(innerObj, clonedObj[key]);
    } else {
      newObj[key] = clonedObj[key];
    }
  }
  return newObj;
};

console.log(deepClone(obj, data));
