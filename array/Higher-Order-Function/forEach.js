/**
 * Array.Prototype.forEach
 * forEach : 조건문과 반복을을 제거하여 복잡성을 해결, 변수의 사용 억제
 * ※ forEach 메서드는 for 문에 비해 성능이 좋지는 않지만 가독성은 더 좋다.
 * 성능이 필요한 경우 for 문, 가독성 측면에서는 forEach
 */

// for 문은 반복을 위한 변수를 선언, 조건식과 증감식으로 이루어져 있어 함수형 프로그래밍이 추구하는 바와 맞지 않음
const numbers = [1,2,3,];
const pows = [];

for(let i = 0; i <numbers.length; i++) {
	pows.push(numbers[i] ** 2);
}
console.log(pows); // [ 1, 4, 9 ]

// forEach 사용
numbers.forEach(item => pows.push(item ** 2));
console.log(pows); // [ 1, 4, 9 ]

// forEach 메서드는 콜백 함수를 호출하면서 요소값, 인덱스, this 3가지 인수를 전달한다. 
numbers.forEach((item, index, arr) => {
	console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
})
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/

// forEach 메서드는 두 번째 인수로 forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
class Numbers {
	numberArray = [];

	multiply(arr) {
		arr.forEach(function (item) {
			this.numberArray.push(item * item);
		}, this); // forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체 전달.
	}
}

const numbersCallback = new Numbers();
numbersCallback.multiply([1,2,4]);
console.log(numbersCallback.numberArray); // [ 1, 4, 16 ]

/** forEach 메서드는 for문과 달리 break, continue 문을 사용할수 없다.
 * 희소 배열의 존재하지 않는 요소는 순회 대상에서 제외(map, filter, reduce 메서드 동일) 
 */

const arr = [1, ,3];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]) // 1 , undefined, 3
}

arr.forEach(v => console.log(v)); // 1, 3
