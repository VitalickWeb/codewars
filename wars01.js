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
// function hero(bullets, dragons) {
// 	let twoBullets = 2;
// 	if (bullets >= dragons * twoBullets) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(hero(10, 5), true);
// console.log(hero(7, 4), false);
// console.log(hero(4, 5), false);
// console.log(hero(100, 40), true);
// console.log(hero(1500, 751), false);
// console.log(hero(0, 1), false);


//Подсчет очков команды в чемпионате
// function points(games) {
// 	let sum = 0;
// 	for (let elem of games) {
// 		let arr = elem.split(':');

// 		if (+arr[0] > +arr[1]) {
// 			sum += 3;
// 		} else if (+arr[0] == +arr[1]) {
// 			sum += 1;
// 		}
// 	}
// 	return sum;
// }

// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]), 30);
// console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]), 10);
// console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]), 0);
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]), 15);
// console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]), 12);


//Возврат цифр в порядке убывания
// function descendingOrder(n) {
// 	let arr = String(n).split('');

// 	if (arr.length == 1) {
// 		return +arr.join('');
// 	} else {
// 		let res = arr.sort((a, b) => b - a);
// 		return +res.join('');
// 	}
// }

// console.log(descendingOrder(0), 0);
// console.log(descendingOrder(1), 1);
// console.log(descendingOrder(111), 111);
// console.log(descendingOrder(15), 51);
// console.log(descendingOrder(1021), 2110);
// console.log(descendingOrder(123456789), 987654321);

// function opposite(number) {
// 	if (number > 0) {
// 		return -number;
// 	} else if (number < 0) {
// 		return -number;
// 	} else {
// 		return 0;
// 	}
// }

// console.log(opposite(1), -1);
// console.log(opposite(-1), 1);
// console.log(opposite(14), -14);
// console.log(opposite(-34), 34);



// function oddOrEven(array) {
// 	let sum = 0;

// 	for (let elem of array) {
// 		sum += elem;
// 	}

// 	if (sum % 2 == 0) {
// 		return 'even';
// 	} else if (sum % 2 != 0) {
// 		return 'odd';
// 	}

// 	return sum;
// }

// console.log(oddOrEven([0]), 'even')
// console.log(oddOrEven([1]), 'odd')
// console.log(oddOrEven([]), 'even')

// console.log(oddOrEven([0, 1, 5]), 'even')
// console.log(oddOrEven([0, 1, 3]), 'even')
// console.log(oddOrEven([1023, 1, 2]), 'even')

// console.log(oddOrEven([0, -1, -5]), 'even')
// console.log(oddOrEven([0, -1, -3]), 'even')
// console.log(oddOrEven([-1023, 1, -2]), 'even')

// console.log(oddOrEven([0, 1, 2]), 'odd')
// console.log(oddOrEven([0, 1, 4]), 'odd')
// console.log(oddOrEven([1023, 1, 3]), 'odd')

// console.log(oddOrEven([0, -1, 2]), 'odd')
// console.log(oddOrEven([0, 1, -4]), 'odd')
// console.log(oddOrEven([-1023, -1, 3]), 'odd')

// function filter_list(l) {
// 	let newArr = [];

// 	for (let elem of l) {
// 		if (elem === Number(elem)) {
// 			newArr.push(elem);
// 		}
// 	}

// 	return newArr;
// }

// console.log(filter_list([1, 2, 'a', 'b']), [1, 2], 'For input [1,2,"a","b"]');
// console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15], 'For input [1,"a","b",0,15]');
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123], 'For input [1,2,"aasf","1","123",123]');



// var stringToNumber = function (str) {
// 	return Number(str);
// }

// console.log(stringToNumber("1234"), 1234);
// console.log(stringToNumber("605"), 605);
// console.log(stringToNumber("1405"), 1405);
// console.log(stringToNumber("-7"), -7);


//sum of squares
// function squareDigits(num) {
// 	let arr = String(num).split('');
// 	let newArr = [];

// 	for (let elem of arr) {
// 		let res = elem * elem;
// 		newArr.push(res);
// 	}
// 	let result = newArr.join('');

// 	return +result;
// }

// console.log(squareDigits(3212), 9414);
// console.log(squareDigits(2112), 4114);
// console.log(squareDigits(0), 0);


// function highAndLow(numbers) {
// 	let arr = numbers.split(' ');
// 	let min = Math.min.apply(null, arr);
// 	let max = Math.max.apply(null, arr);

// 	let newArr = [];
// 	newArr.push(max, min);

// 	return newArr.join(' ');
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
// console.log(highAndLow("1 2 3"), "3 1");



// function greet(name) {
// 	return `Hello, ${name} how are you doing today?`;
// }

// console.log(greet("Ryan"), "Hello, Ryan how are you doing today?");
// console.log(greet("Shingles"), "Hello, Shingles how are you doing today?");



// function numberToString(num) {
// 	return String(num);
// }

// console.log(numberToString(67), '67');



// function betterThanAverage(classPoints, yourPoints) {
// 	classPoints.push(yourPoints);
// 	let sumPoints = 0;

// 	for (let i = 0; i < classPoints.length; i++) {
// 		sumPoints += classPoints[i];
// 	}

// 	if (yourPoints > sumPoints / classPoints.length) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(betterThanAverage([2, 3], 5), true);
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
// console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);



function getMiddle(s) {
	let arr = s.split('');
	console.log(arr)
	//return arr;
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");