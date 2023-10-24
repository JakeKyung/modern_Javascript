/**
 * Array.Prototype.reduce
 * reduce : 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복호출
 * 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여
 * 하나의 결과값을 만들어 반환.
 */

/** reduce 매서드는 2개의 인수, 즉 콜백 함수와 초기값 0 을 전달 받아 자신을 호출한 배열의 모든 요소를 누적한 결과 */
const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => accumulator + currentValue , 0);
console.log(sum);

// 평균구하기
const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, i, { length }) => {
	 return i === length -1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(average); // 3.5


// ※ 초기값을 생략할 수 있지만, 초기값을 전달하는 것이 안전.
const sumCase_1 = [].reduce((acc, cur) => acc + cur);
console.log(sumCase_1); // TypeError: Reduce of empty array with no initial value

const sumCase_2 = [].reduce((acc, cur) => acc + cur, 0);
console.log(sumCase_2); // 0