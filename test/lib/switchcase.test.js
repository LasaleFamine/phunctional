import test from 'ava';
import switchcase from './../../src/lib/switchcase';

const testObj = {case1: 'case 1', case2: 'case 2', casefun: () => 1 + 2};
const def = 'def';

test('correct case', t => {
	const actual = switchcase(testObj)(def)('case1');
	t.is(actual, testObj.case1, 'Should return the correct case choosen');
});

test('run function for case', t => {
	const actual = switchcase(testObj)(def)('casefun');
	t.deepEqual(actual, 3);
});

test('wrong case, fallback default', t => {
	const actual = switchcase(testObj)(def)('wrongkey');
	t.is(actual, def, 'Should return default case when key is missing');
});

test('wrong number of args', t => {
	const actual = switchcase(testObj);
	t.is(
		typeof actual,
		'function',
		'Should return empty function if called without other args'
	);
});
