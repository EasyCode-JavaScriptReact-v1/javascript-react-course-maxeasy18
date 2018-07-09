
console.log(


`
ЧАСТЬ 2

`);

console.log(`

первая задача`);


function sum(x){
	return function(y){
		return x + y;
	}
}

console.log('sum(5)(-1) =',sum(5)(-1));
/***************************************/

console.log(`

вторая задача`);

function makeBuffer(){
	let storage = '';
	return function(value){
		if(value === undefined){
			return storage;
		}else{
			storage += value;
		}
	}
}




let buffer = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log('вызываем buffer()', buffer() ); // Замыкания Использовать Нужно!

/***************************************/

console.log(`

третья задача`);
function makeBufferClear() {
	let storage = '';
	let creator = function(value){
		if(value === undefined){
			return storage;
		}else{
			storage += value;
		}
	}
	creator.clear = function(){
		storage = '';
	}
	return creator;
}


var bufferClear = makeBufferClear();

bufferClear("Тест");
bufferClear(" тебя не съест ");
console.log('добавили в буфер фразы:', bufferClear() ); // Тест тебя не съест

bufferClear.clear();

console.log('смотрим после очистки:', bufferClear() ); // ''



console.log(`

четвертая задача`);

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

let list = []
users.forEach(function(user) {
	list.push(user.name);  
}); // Вася, Маша, Петя
console.log('оригинальный порядок имен', list.join(','));

function byField(field){
	return function(a,b){
		return a[field] > b[field] ? 1 : -1;
	}
}


users.sort(byField('name'));
list = [];
users.forEach(function(user) {
  list.push(user.name);  
}); // Вася, Маша, Петя

console.log('сортировка по имени', list.join(','));

users.sort(byField('age'));
list = [];
users.forEach(function(user) {
  list.push(user.name);  
}); // Маша, Вася, Петя

console.log('сортировка по возрасту', list.join(','));




console.log(`

Пятая задача
`);

function inBetween(a,b){	
	return function(value){
		return (value >= a && value <= b) ? true : false ;	
	}
}

function inArray(arr){
	return function(value){
		return arr.indexOf(value) !== -1 ? true : false;
	}
}

function filter(arr,func){
	return arr.filter(function(value){
		return func(value);
	});
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

console.log(filter(arr, inBetween(3, 6)));
console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2


console.log(`

шестая задача
`);


function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
  	// чтобы сохранить номер стрелка, нужно сохранить его в замыкании, что и сделаем
  	var createShoter = function(number){
  		return function() { 
	      console.log( number ); 
	    }
  	}
    
    shooters.push(createShoter(i));
  }

  return shooters;
}

var army = makeArmy();

army[0](); 
army[5](); 
 
// вариантов больше не придумал :(


