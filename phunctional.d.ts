declare function map(f: any): (x: Array<any>) => Array<any>;
declare function switchcase(cases: Array<Object>): (defaultCase: any) => (key: number | string) => any;

export {
	map,
	switchcase
}
