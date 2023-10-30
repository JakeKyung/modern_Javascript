
const getCase_1 = url => {
	var XMLHttpRequest = require('xhr2');
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();

	xhr.onload = () => {
		if (xhr.status === 200) {
			console.log(JSON.parse(xhr.response));
		} else {
			console.error(`${xhr.status} ${xhr.statusText}`);
		}
	};
};

getCase_1('https://jsonplaceholder.typicode.com/posts/1');

/**
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
 */



// onload 이벤트 핸들러는 비동기로 동작, 반환값은 캐치할 수 없다.
const getCase_2 = url => {
	var XMLHttpRequest = require('xhr2');
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();

	xhr.onload = () => {
		if (xhr.status === 200) {
			return JSON.parse(xhr.response);
		}
		console.error(`${xhr.status} ${xhr.statusText}`);
		
	};
};

const response = getCase_2('https://jsonplaceholder.typicode.com/posts/1');
console.log(response); // undefined