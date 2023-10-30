
const get = url => {
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

get('https://jsonplaceholder.typicode.com/posts/1');

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
