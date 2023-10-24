/**
 * Array.Prototype.map
 * map : 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복호출
 * 콜백 함수의 반환값들로 구성된 새로운 배열 반환(원본 배열은 변경x)
 */

const numbers = [1, 4, 9];

const roots = numbers.map(item => Math.sqrt(item));
console.log(roots); // [ 1, 2, 3 ]
console.log(numbers); // [ 1, 4, 9 ]


class Prefixcer {
	constructor(prefix) {
		this.prefix = prefix;
	}

	add(arr) {
		return arr.map(item => this.prefix + item);
	}
}

const prefixer = new Prefixcer('-webkit-');
console.log(prefixer.add(['transtion', 'user-select'])); // [ '-webkit-transtion', '-webkit-user-select' ]