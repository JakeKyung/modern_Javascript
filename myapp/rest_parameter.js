
/**
 * @param  {...any} rest
 * Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다. 
 * - Rest 파라미터는 반드시 마지막 파라미터이어야 한다.
 * - Rest 파라미터는 단 한개만 사용 가능.
 */

function foo(...rest) {
    console.log(rest);
}
foo(1,2,3,4,5); // [ 1, 2, 3, 4, 5 ]

// 일반 매개변수와 함께 사용 가능
function foo_case(param, ...rest) {
    console.log(param); // 1
    console.log(rest); // [ 2, 3, 4, 5 ]
} 
foo_case(1,2,3,4,5);
