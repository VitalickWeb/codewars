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
// function century(year) {
// 	let num = year / 100;
// 	let century = Math.ceil(num);
// 	return century;
// }

// console.log(century(1705));//, 18, 'Testing for year 1705'
// console.log(century(1900));//, 19, 'Testing for year 1900
// console.log(century(1601));//, 17, 'Testing for year 1601
// console.log(century(2000));//, 20, 'Testing for year 2000
// console.log(century(89));//, 1, 'Testing for year 89


//функция, которая преобразует данное логическое значение в его строковое представление.
// function booleanToString(b) {
// 	if (b === true) {
// 		return 'true';
// 	} else {
// 		return 'false';
// 	}
// }
// console.log(booleanToString(true));//, "true", 'When we pass in true, we want the string "true" as output'
// console.log(booleanToString(false));//, "false", 'When we pass in false, we want the string "false" as output'


//function sumMix складывает числа и строчные числа
// function sumMix(x) {
// 	let sum = 0;
// 	for (let elem of x) {
// 		sum += +elem;
// 	}
// 	return sum;
// }

// console.log(sumMix([9, 3, '7', '3']));//, 22
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));//, 42
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));//, 41


//multipl num
// function grow(x) {
// 	let sum = 1;
// 	for (let elem of x) {
// 		sum *= elem;
// 	}
// 	return sum;
// }

// console.log(grow([1, 2, 3]));//, 6
// console.log(grow([4, 1, 1, 1, 4]));//, 16
// console.log(grow([2, 2, 2, 2, 2, 2]));//, 64


//задача можно добратся до места или нет
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
// 	if (mpg * fuelLeft >= distanceToPump) {//вопрос в том что доедет, и еще может остаться топливо
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// console.log(zeroFuel(50, 25, 2));//, true
// console.log(zeroFuel(100, 50, 3));//, false


//функция перевертыш
// const reverseSeq = n => {
// 	let arr = [];

// 	for (let i = 1; i <= n; i++) {
// 		arr.push(i);
// 	}

// 	return arr.reverse();
// };


//функция принимающая ответ да или нет
// function boolToWord(bool) {
// 	if (bool) {
// 		return 'Yes';
// 	} else {
// 		return 'No';
// 	}
// }

// console.log(boolToWord(true));//, 'Yes'
// console.log(boolToWord(false));//, 'No'


//функция makeNegative из положительного числа, делает отрицательное
// function makeNegative(num) {
// 	let sum = 0;
// 	if (num > 0) {
// 		return sum - num;
// 	} else {
// 		return num;
// 	}
// }

// console.log(makeNegative(42));//-42
// console.log(makeNegative(1));    // return -1
// console.log(makeNegative(-5));   // return -5
// console.log(makeNegative(0));    // return 0
// console.log(makeNegative(0.12)); // return -0.12


//Сумма без наибольшего и наименьшего числа
// function sumArray(array) {
// 	let sumArr = 0;

// 	if (array === null || array === undefined || array.length <= 2) {
// 		return 0;
// 	} else {
// 		let min = Math.min.apply(null, array);
// 		let indexMin = array.indexOf(min);
// 		array.splice(indexMin, 1);

// 		let max = Math.max.apply(null, array);
// 		let indexMax = array.indexOf(max);
// 		array.splice(indexMax, 1);

// 		for (let elem of array) {
// 			sumArr += elem;
// 		}
// 	}

// 	return sumArr;
// }

// console.log(sumArray(null), 0);
// console.log(sumArray([]), 0);
// console.log(sumArray([3]), 0);
// console.log(sumArray([3, 5]), 0);
// console.log(sumArray([6, 2, 1, 8, 10]), 16);
// console.log(sumArray([0, 1, 6, 10, 10]), 17);
// console.log(sumArray([-6, -20, -1, -10, -12]), -28);
// console.log(sumArray([-6, 20, -1, 10, -12]), 3);


//Определяем выживет герой или нет
function hero(bullets, dragons) {
	let twoBullets = 2;
	if (bullets >= dragons * twoBullets) {
		return true;
	} else {
		return false;
	}
}

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
