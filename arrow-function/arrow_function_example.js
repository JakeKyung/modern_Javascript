// 화살표 함수는 함수 표현식으로 정의해야함
const multiply = (x, y) => x*y;
console.log(multiply(3,9)); // -> 27


const power = x => x ** 2;
console.log(power(2)); // -> 4
// 함수 몸체는 중괄로
const power_2 = x => { return x ** 2; };
console.log(power_2(2));


const sum  = (a, b) => {
    const result = a + b;
    return result;
}
console.log(sum(1, 2)); // -> 3

// 즉시 실행 함수로 사용 가능
const person = (name => ({
    sayHi() { return `Hi? My name is ${name}.`; }
}))('Kyung');

console.log(person.sayHi());

/*
1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor
*/
const Foo = ()  => {};
new Foo(); // TypeError: Foo is not a constructor

/*
2. 중복된 매개변수 이름을 선언할 수 없다,
*/
const arrow = (a, a) => { a + a };
console.log(arrow(1,2)); // SyntaxError: Duplicate parameter name not allowed in this context