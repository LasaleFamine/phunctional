'use strict';

module.exports = f => x =>
	Array.isArray(x) ? x.map(f) : [];
