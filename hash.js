import crc32 from 'crc-32';

const getHashIndex = (key) => {
  const hash = crc32.str(key);
  const index = Math.abs(hash) % 1000;
  return index;
};

const make = () => {
  const internalArray = [];
  return internalArray;
};

const set = (map, key, value) => {
  const index = getHashIndex(key);
  map[index] = [key, value];
};

const get = (map, key, defaultValue = null) => {
  const index = getHashIndex(key);
  const [, array] = map[index];

  return array;
};

const map = make();
set(map, 'name', 'Walter');
set(map, 'age', '52');
const value1 = get(map, 'name');
const value2 = get(map, 'age');

console.log(value1);
console.log(value2);
