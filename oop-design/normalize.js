import _ from 'lodash';
import { data } from './country-city-list.js';

function normalize(array) {
  const newArray = array;
  const resultObject = newArray.map((item) => new Object({ name: item.name.toLowerCase().replace(/\s/g, ''), country: item.country.toLowerCase().replace(/\s/g, '') }))
    .reduce((accumulator, item) => {
      if (_.get(accumulator, item.country) === undefined) {
        accumulator[item.country] = [];
      }
      if (!accumulator[item.country].includes(item.name)) {
        accumulator[item.country].push(item.name);
      }
      return accumulator;
    }, {});
  return resultObject;
}

console.log(normalize(data));
