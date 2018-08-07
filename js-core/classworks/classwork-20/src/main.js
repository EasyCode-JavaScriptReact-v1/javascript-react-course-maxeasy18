const btn = document.getElementById('button');

const serverRequest = () => {
	const url = 'http://easycode-js.herokuapp.com/mamax';
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4){
			console.log(xhr.responseText);
			const  pre = document.createElement("PRE");
			pre.textContent = xhr.responseText;
			document.body.appendChild(pre);
		}

	}
	xhr.open('GET', url);
	xhr.send();
}

btn.addEventListener('click',serverRequest);





const btnAdd = document.getElementById('buttonAdd');

const serverAddUser = () => {
	const url = 'http://easycode-js.herokuapp.com/mamax';

	const xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange', () => {
		if(xhr.readyState === 4){
			console.log(xhr.responseText);
			const  pre = document.createElement("PRE");
			pre.textContent = xhr.responseText;
			document.body.appendChild(pre);
		}

	});
	const user = {
		fullName: 'glavnyy user',
		email: 'dddd@gmail.com'
	}
	xhr.open('POST', url + '/users');
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send(JSON.stringify(user));
}
btnAdd.addEventListener('click',serverAddUser);

const form = document.forms[0];
form.addEventListener('submit', (e) => {
	e.preventDefault();
})

const saveToServer = (user) => {
	const url = 'http://easycode-js.herokuapp.com/mamax';

	const xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange', () => {
		if(xhr.readyState === 4){
			console.log(xhr.responseText);
			const  pre = document.createElement("PRE");
			pre.textContent = xhr.responseText;
			document.body.appendChild(pre);
		}

	});
	
	xhr.open('POST', url + '/users');
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send(JSON.stringify(user));
}

const createButton = document.getElementById('createUser');
createButton.addEventListener('click', () => {
	let canSave = true;
	const [form] = document.forms;
	const fields = form.querySelectorAll('input');
	let user = {};
	fields.forEach( element => {
		if(!form[element.name].value){
			canSave = false;
			alert([element.name]+' mustn\'t be empty');
		}else{
			user[element.name] = element.value;
		}
	});
	

	if(canSave){
		saveToServer(user);
	}

});
