/**
 * fecth 함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환
 * : const promise = fetch(url, [, options])
 */

fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => console.log(response));


	
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(json => console.log(json));