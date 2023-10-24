/**
 * Array.Prototype.sort
 * sort : 배열의 요소 정렬, 오름차순
 * reverse : 배열의 요소 정렬, 내림차순
 */

const fruits = ['Banana', 'Orange', 'Apple'];
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
fruits.reverse(fruits);
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

/**
 * 숫자 정렬은 제대로 정렬이 안된다.
 * ※ sort 메서드의 기본 정렬 순서는 유니코드 포인트의 순서를 따른다.
 */
const points = [40,100,1,5,2,25,10];
points.sort();
console.log(points); //[1, 10, 100, 2, 25, 40, 5]

/** 
 * 숫자 요소를 정렬할 떄는 sort 메서드에 "정렬 순서를 정의하는 비교 함수를 인수로 전달" 해야한다.
 * 비교 함수는 양수나 음수 또는 0을 반환
 */
points.sort((a,b) => a - b);
console.log(points); // [1, 2, 5, 10,25, 40, 100]
points.sort((a,b) => b - a);
console.log(points); // [100, 40, 25, 10, 5, 2, 1]

