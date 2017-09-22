import test from 'ava';
import map from './../../src/lib/map';

const testArr = ['some', 'something', 'nice', 'good'];
const fnCase1 = item => item.inclues('some');
const resCase1 = ['some', 'something'];

test('correct use of array map', t => {
	const actual = map(fnCase1)(testArr);
	t.deepEqual(actual, resCase1, 'Should return the correct items containing "some"');
});

test('pass NOT an Array', t => {
	const actual = map(fnCase1)('something wrong');
	t.deepEqual(actual, [], 'Should not throw and return an empty array');
});
