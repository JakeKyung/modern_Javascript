const arr = ['apple', 'banana', 'orange'];

console.log(arr.length); // 3

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // apple, banana, orange
}

// 자바스크립트에는 배열이라는 타입은 존재하지 않는다. 배열은 '객체 타입'이다.
console.log(typeof arr) // object

/** 
 * 일반 객체와 배열을 구분하는 가장 명확한 차이는 "값의 순서" 와 "length 프로퍼티"
 * 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조.
 */ 
