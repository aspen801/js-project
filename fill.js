import * as testData from './testdata.js';

const fillObject = (obj1, obj2, propsToFill) => {
  if (propsToFill !== undefined && propsToFill.length > 0) {
    for (const pror of propsToFill) {
      obj1[pror] = obj2[pror];
    }
  } else Object.assign(obj1, obj2);
};

fillObject(testData.site, testData.data, ['name', 'car']);
console.log(testData.site);
