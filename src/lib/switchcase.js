'use strict';

const _executeFunction = f =>
	typeof f === 'function' ? f() : f;

const _switch = cases => defaultCase => key =>
	key in cases ? cases[key] : defaultCase;

module.exports = cases => defaultCase => key =>
	_executeFunction(_switch(cases)(defaultCase)(key));
