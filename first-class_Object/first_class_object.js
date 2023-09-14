// 일급 객체
// 1. 함수는 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체,배열 등)에 저장할 수 있다.
// 3. 함수의 매게변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

// javascript 는 변수에 함수 표현식으로 자유롭게 대입 가능
const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

// 객체에 함수를 저장할 수 있다.
const auxs = { increase, decrease };

// 함수의 매게변수에 전달할 수 있다.
// 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
    let num = 0;

    return function () {
        num = aux(num);
        return num;
    };
}

// 함수 파라미터의 객체에 저장된 함수를 전달
const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());
console.log(decreaser());