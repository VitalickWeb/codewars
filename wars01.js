'use strict';

//функция, которая определяет, нужно ли множественное число или нет. Он должен принимать число и возвращать true, если с этим числом следует использовать множественное число, или false, если нет.
// function plural(n) {
// 	if (n > 1 || n < 1) {
// 		return true;
// 	} else if (n == 1) {
// 		return false;
// 	}
// }

// console.log(plural(0));
// console.log(plural(0.5));
// console.log(plural(1));
// console.log(plural(100));
// console.log(plural(Infinity));



//find the needle
// function findNeedle(haystack) {
// 	var getIdx = '';
// 	var findElem = 'needle';
// 	var idx = haystack.indexOf(findElem);
// 	while (idx != -1) {
// 		getIdx = `found the needle at position ${idx}`;
// 		idx = haystack.indexOf(findElem, idx + 1);
// 	}

// 	return getIdx;
// }

// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// var haystack_3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];

// console.log(findNeedle(haystack_1));
// console.log(findNeedle(haystack_2));
// console.log(findNeedle(haystack_3));



//positiveSum функция, которая возвращает сумму положительных чисел
//если таких чисел в массиве нет то выводит ноль.
// function positiveSum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		if (elem >= 0) {
// 			sum += elem;
// 		}
// 	}

// 	return sum;
// }

// console.log(positiveSum([1, 2, 3, 4, 5]));//, 15
// console.log(positiveSum([1, -2, 3, 4, 5]));//, 13
// console.log(positiveSum([]));//, 0
// console.log(positiveSum([-1, -2, -3, -4, -5]));//, 0
// console.log(positiveSum([-1, 2, 3, 4, -5]));//, 9



//Фальшивая корзина
// function fakeBin(x) {
// 	let result = '';

// 	for (let elem of x) {
// 		if (elem < 5) {
// 			result += '0';
// 		} else if (elem >= 5) {
// 			result += '1';
// 		}
// 	}
// 	return result;
// }

// console.log(fakeBin('45385593107843568'));//, '01011110001100111'
// console.log(fakeBin('509321967506747'));//, '101000111101101'
// console.log(fakeBin('366058562030849490134388085'));//, '011011110000101010000011011'


//Задача century, учитывая год возвращать столетие в котором он нахоится.
function century(year) {
	let num = year / 100;
	let century = Math.ceil(num);
	return century;
}

console.log(century(1705));//, 18, 'Testing for year 1705'
console.log(century(1900));//, 19, 'Testing for year 1900
console.log(century(1601));//, 17, 'Testing for year 1601
console.log(century(2000));//, 20, 'Testing for year 2000
console.log(century(89));//, 1, 'Testing for year 89


