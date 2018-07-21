
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --
/*
 * Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */
let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requirements: ['Node.js', 'JavaScript', 'OOP'],
  goodDev: goodDev
};
let developer2 = {
  experience: [
	{ technology: 'java' },
	{ technology: 'c++' },
	{ technology: 'aws' },
	{ technology: 'docker' }
  ],
  requirements: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};
function goodDev() {
 let calcObj = (val,obj) => {
  return (obj.skills || obj.experience).some(function(arrVal){
   if(typeof arrVal=== 'string'){
    return arrVal === val;
   }
  });
 
 }
 this.requirements.forEach( val => {  
  console.log(
   `required: ${val} ... ` +
   (calcObj(val,this) ? 'success' : 'fail')
  );
 },this);
}
console.log('\ndeveloper1');
developer1.goodDev();
console.log('\ndeveloper2');
developer2.goodDev();
// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---
// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success




/*
 *
 * TASK 2
 *
 *
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению (например age или name)
 *
 * При вызове функции используйте this
 *
 * */
let myObject = {
  database: [
	{ age: 100, name: 'b' },
	{ age: 15, name: 'c' },
	{ age: 25, name: 'a' }
  ]
};


myObject.myFilter = function(field) {	
	return this.database.sort((prev,next) => {
		
		if(parseInt(prev[field])){
			// console.log(parseInt(prev[field]) > parseInt(next[field]) ? 1 : -1 );
			return parseInt(prev[field]) > parseInt(next[field]) ? 1 : -1 ;
		}else{
			return prev[field] > next[field] ? 1 : -1;
		}
	});
};
// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

// создаю копии массивов, потому что в консоли отображаются потом по последней сортировке, неудобно
console.log(myObject.myFilter('age').slice());
// {age:25, name:a}, {age:100, name: b} ...
console.log(myObject.myFilter('name').slice());


/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
*/
////// @ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */
let junior = {};
// fn.length == arguments.length

/*
  Вариант с замыканием. Минус - замыкание на глобальный скоуп.
*/

let  arr = [];
function addMethod(object, name, fn) {
  arr[fn.length] = fn;
  object[name] = function(){  
    arr[arguments.length]();    
  };
}


/*
  Вариант с сохранением в свойства самого объекта.
*/
// function addMethod(object, name, fn) {
//   if(!object.vars){
//     object.vars = [];   
//   }
//   object.vars[fn.length] = fn;
//   object[name] = function(){  
//     this.vars[arguments.length]();    
//   };
// }




addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});
junior.ok(1, 2, 3); // 'three arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1); //'one arguments'
junior.ok(); //'zero arguments'
junior.ok(1, 2, 3); // 'three arguments'


console.log(`В коде есть еще вариант, но он не использует замыкания.
Текущий вариант тоже не самый лучший, потому что придумал замкнуть только на глобальный скоуп.`)
