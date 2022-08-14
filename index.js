import normalize from './normalize.js';
import compareObjects from './compare.js';
import getDomainInfo from './domain.js';
import countWords from './words.js';
import * as testData from './testdata.js';




console.log(compareObjects(testData.company1, testData.company2));
console.log(compareObjects(testData.company3, testData.company4));

normalize(testData.lesson)
console.log(testData.lesson);
console.log(getDomainInfo(testData.domain));
console.log(countWords(testData.loremText));


