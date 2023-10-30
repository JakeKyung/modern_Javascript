const promiseGet = url => {
	return new Promise((resolve, reject) => {
		var XMLHttpRequest = require('xhr2');
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();

		xhr.onload = () => {
			if (xhr.status === 200) {
				resolve(console.log(JSON.parse(xhr.response)));
			} else {
				reject(new Error(xhr.status));
			}
		};
	});
};

promiseGet('https://jsonplaceholder.typicode.com/posts/1');