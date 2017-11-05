import test from 'ava';
import pEach from './../../src/lib/p-each';

const testArr = ['some', 'something', 'nice', 'good'];
const fnCase1 = item => item + 'asd';
const resCase1 = ['someasd', 'somethingasd', 'niceasd', 'goodasd'];

const Timer = class Timer {
	constructor(time) {
		this.time = time;
	}

	start() {
		this.interval = setInterval(() => {
			this.time = this.time + 1;
		}, 1000);
	}

	stop() {
		clearInterval(this.interval);
	}

	getTime() {
		return this.time;
	}
};

const timer = new Timer(0);

test('pEach returns correctly if an array and a function are passed', async t => {
	const actual = await pEach(testArr)(fnCase1);
	t.deepEqual(actual, resCase1, 'Should return the correct items after a promise');
});

test('handle correctly the delay', async t => {
	timer.start();
	await pEach(testArr, 3000)(fnCase1);
	timer.stop();
	// NOTE (on ">= 8"): it's complex to obtain the exact result during tests
	t.true(timer.getTime() >= 8, 'Should respect the delay');
});

test('pass NOT an Array', async t => {
	const actual = await pEach('something wrong')(fnCase1);
	t.deepEqual(actual, [], 'Should not throw and return an empty array');
});

