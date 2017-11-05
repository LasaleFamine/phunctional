'use strict';

const makePromise = (fn, item, delay) =>
	new Promise(resolve => setTimeout(() => resolve(fn(item)), delay));

module.exports = (items, delay = 0) => fn =>
	Array.isArray(items) ?
		Promise.all(
			items.reduce((acc, item, idx) =>
				acc.concat(makePromise(fn, item, idx * delay)), [])
		) : Promise.all([]);
