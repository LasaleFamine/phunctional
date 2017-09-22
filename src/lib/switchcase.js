'use strict';

const _executeFunction = f =>
	typeof f === 'function' ? f() : f;

const _switch = cases => defaultCase => key =>
	key in cases[key] ? cases[key] : defaultCase;

export default cases => defaultCase => key =>
	_executeFunction(_switch(cases)(defaultCase)(key));
