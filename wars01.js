'use strict';

//функция, которая определяет, нужно ли множественное число или нет. Он должен принимать число и возвращать true, если с этим числом следует использовать множественное число, или false, если нет.
function plural(n) {
	if (n > 1 || n < 1) {
		return true;
	} else if (n == 1) {
		return false;
	}
}

console.log(plural(0));
console.log(plural(0.5));
console.log(plural(1));
console.log(plural(100));
console.log(plural(Infinity));

