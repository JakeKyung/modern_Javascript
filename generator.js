/**
 * ES6에서 도입된 제너레이터(generator)는 코드블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특별함 함수
 * 1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.
 * 2. 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다.
 * 3. 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다
 * 제너레이터 함수는 function* 키워드로 선언, 하나 이상의 yield 표현식을 포함한다.  
 * */


// 제너레이터 함수 선언문
function* genDecFunc() {
	yield 1;
}
// 제너레이터 함수 표현식
const genExpFunc = function* () {
	yield 1;
}
// 제너레이터 메서드
const obj = {
	* genObjMethod() {
		yield 1;
	}
}
// 제너레이터 클래스 메서드
class MyClass {
	* genClaMethod() {
		yield 1;
	}
}

// 제너레이터 객체
function* genFunc() {
	yield 1;
	yield 2;
	yield 3;
}

const generator = genFunc();
console.log(Symbol.iterator in generator); // true
console.log('next' in generator); // true 

// 이터러블 구현 - 피보나치
const infiniteFibonacci = (function() {
	let [pre, cur] = [0, 1];

	return {
		[Symbol.iterator]() { return this; },
		next() {
			[pre, cur] = [cur, pre + cur];
			return { value: cur};
		}
	};
}());

for(const num of infiniteFibonacci) {
	if (num > 10000) break;
	console.log(num); // 1,2,3,5,8,13..4181, 6765
}

// 제너레이터 함수 - 피보나치=
const infiniteFibonacciGenerator = (function*() {
	let [pre, cur] = [0, 1];

	while (true) {
		[pre, cur] = [cur, pre + cur];
		yield cur;
	}
}());

for(const num of infiniteFibonacciGenerator) {
	if (num > 10000) break;
	console.log(num); // 1,2,3,5,8,13..4181, 6765
}
