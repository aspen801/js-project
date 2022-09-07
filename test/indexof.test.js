import _ from 'lodash';
import assert from 'assert';

assert.deepEqual(_.indexOf([1, 2, 1, 2], 2), 1);
assert.deepEqual(_.indexOf([1, 2, 1, 2], 2, 2), 3);
assert.deepEqual(_.indexOf([2, 'one', 'cat', false], 8), 1);

console.log('All tests passed!');