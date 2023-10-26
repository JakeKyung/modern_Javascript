/**
 * async/await는 프로미스 기반으로 동작
 * 프로미스의 then/catch/finally 후속 처리 메서드에 콜백 함수를 전달해서 비동기 처리 결과를 후석 처리할 필요 없이 마치 동기처럼 프로미스 사용할 수 있다.
 * 에러처리 : try...catch문 을 사용하거나, Promise.prototype.catch 후속처리 메서드 사용.!
 */
const fetch = require('node-fetch');
const { resolve } = require('path');

async function fetchTodo() {
	const url = 'https://jsonplaceholder.typicode.com/todos/1';

	const response = await fetch(url);
	const todo = await response.json();
	console.log(todo);
}
fetchTodo();

// await 키워드는 프로미스가 settled 상태(비동기 처리가 수행된 상태)가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환
// 반드시 프로미스 앞에서 사용해야함
const getGithubUserName = async id => {
	const res = await fetch(`https://api.github.com/users/${id}`);
	const { name } = await res.json();
	console.log(name);
};
getGithubUserName('JakeKyung');

// async/await는 비동기 처리이므로 앞선 여러 처리를 동시 수행할 경우 순차적으로 처리할 필요가 없다.
async function foo() {
	const res = await Promise.all([
		new Promise(resolve => setTimeout(() => resolve(1),3000)),
		new Promise(resolve => setTimeout(() => resolve(2),2000)),
		new Promise(resolve => setTimeout(() => resolve(3),1000))
	]);
	console.log(res);
}
foo();