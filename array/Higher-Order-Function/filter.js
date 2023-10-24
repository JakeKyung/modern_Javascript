/**
 * Array.Prototype.filter
 * filter : 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열 반환
 */

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(item => item % 2); // 2로나눈 몫(0은 false, 1 은 true)
console.log(odds); //[ 1, 3, 5 ]

// filter 메서드는 자신을 호출한 배열에서 특정 요소를 제거하기 위해 사용
class Users {
	constructor() {
		this.users = [
			{ id: 1, name: 'Kyung'},
			{ id: 2, name: 'Jake'}
		]
	}

	findById(id) {
		return this.users.filter(user => user.id === id);
	}
	remove(id) {
		this.users = this.users.filter(user => user.id !== id);
	}
}
const users = new Users();
let user = users.findById(1);
console.log(user); // [ { id: 1, name: 'Kyung' } ]

users.remove(1);
user = users.findById(1);
console.log(user); // []
