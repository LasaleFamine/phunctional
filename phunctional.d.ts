declare function map(f: Function): (x: Array<any>) => Array<any>;
declare function switchcase(cases: Object): (defaultCase: any) => (key: number | string) => any;
declare function pEach(items: Array, delay: Number): (fn: Function) => Promise;

export {
	map,
	switchcase,
	pEach
}
