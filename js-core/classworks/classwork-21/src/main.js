const userId = [1,2,3];
const url = 'https://jsonplaceholder.typicode.com/users/';

// let sum =0;
// let names = [];
// let funcend = () => {
// 	console.log(sum,names);
// }

// const getUser = (userIndex) =>{
// 	const id = userId[userIndex];
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('GET', url + id, false);
// 	xhr.onreadystatechange = function() { // (3)
// 	  if (xhr.readyState == 4) {
// 	  	let res = JSON.parse(xhr.responseText);
// 	    sum +=res.id;
// 	    names.push(res.name);
// 	    console.log(res.id);
// 	   	if(names.length<userId.length){
// 	   		getUser(userIndex+1);
// 	   	}else{
// 	   		funcend();
// 	   	}
// 	  }
// 	}
// 	xhr.send();	
// }

// getUser(0);

// fetch( url + userId[0])
// 	.then( responce => {
// 		return responce.json();
// 	})
// 	.then( userJson => {
// 		console.log(userJson);
// 	});

let url2 = 'http://easycode-js.herokuapp.com/mamax/users/';
fetch( url2 , {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/json'
		},
		body : JSON.stringify(
			{ fullName: 'AdAA', email: 'AAA@aaa.aaa' }
		)
	}

).then( response => {
	return response.json();
}).then( user => {
	console.log(user);
})


fetch( url2 ).then( response => {
	return response.json();
}).then( user => {
	console.log(user);
})
