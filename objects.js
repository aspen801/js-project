import * as testData from './testdata.js';

const getObject = (object, keyPath) => {
  var tempObj = object;
  for (const key of keyPath) {
    if (Object.prototype.hasOwnProperty.call(tempObj, key)) {
      tempObj = tempObj[key];
    } else return null;
  }
  return tempObj;
};

console.log(getObject(testData.testObject, ['hosts', 1, 'null']));

export default getObject;
