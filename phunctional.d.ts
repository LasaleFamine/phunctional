declare function map(f: Function): (x: Array<any>) => Array<any>;
declare function switchcase(cases: Object): (defaultCase: any) => (key: number | string) => any;

export {
	map,
	switchcase
}
