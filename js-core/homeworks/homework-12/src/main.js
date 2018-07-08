/*
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

let ctx = {
	req: {
		PORT: 'number',
		url: 'string'
	},
	res: {
		status: 'number',
		message: 'string',
		header: {
			'content-type':'application/json'
		}
	}
}

let next = function(){
	console.log('function NEXT');
}

function Http(){ }

Http.prototype.createServer = function(fn) {
	this._createServer = function(...args){
		fn(...args);
	};
	return this;
}

Http.prototype.listen = function(PORT, host) {
	console.log(`Server running on https://${host}:${PORT}`);
	this._createServer(ctx,next);
}

const server = new Http().createServer(function(ctx, next) {
  console.log('ctx:', ctx);
  console.log('next:', next);
}).listen(3000, 'localhost');


// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human


function Human(){
	this.name = 'John Dou';
	this.age = 0;
	this.sex = 'Unknown';
	this.height = 0;
	this.weight = 0;
}

Human.prototype.drinkCoffee = function(){
	console.log('Drinking coffee ...');
}

function Worker(work,salary){
	this.work = work;
	this.salary = salary;
}

//With this variant we can't see properties from Human.
// Worker.prototype = Object.create(Human.prototype);
// So we have to use this method.
Worker.prototype = new Human();

Worker.prototype.toWork = function(){
	console.log('I\'m working...');
}

let worker1 = new Worker('office',100);
let worker2 = new Worker('plant',2100);

console.log('worker1 =>',worker1);
console.log('worker1.work =>',worker1.work);
console.log('access to parents property AGE:');
console.log('worker1.age =>',worker1.age);
console.log('worker2.work =>',worker2.work);
console.log('objects property work is now the same in different objects');
console.log('worker2.work == worker1.work',worker2.work == worker1.work);
console.log('property from anchestor is same in different objects');
console.log('worker2.age == worker1.age',worker2.age == worker1.age);


function Student(university,stipend){
	this.university = university;
	this.stipend = stipend;
}

Student.prototype = new Human();

Student.prototype.toWatchMovies = function(){
	console.log('I\'m watching movies now...');
}


let student1 = new Student('University1',300);
let student2 = new Student('University1',27);

console.log('student2.toWatchMovies() = >');
student2.toWatchMovies();

// student2.toWork();
student2.drinkCoffee();


// But  I think it's better to build this exircise with method like this

function Human2(info){
	for( prop in info){
		this[prop] = info[prop];
	}
}

Human2.prototype.drinkCoffee = function(){
	console.log('Drinking coffee 2...');
}

function Worker2(workerInfo, humanInfo){
	Human2.call(this,humanInfo)
	for( prop in humanInfo){
		this[prop] = humanInfo[prop];
	}	
}

Worker2.prototype = Object.create(Human2.prototype);

Worker2.prototype.toWork = function(){
	console.log('I\'m working 2 ...');
}

let worker_2Info = {salary:200,workOn: 'plan'};
let person_2Info = { age:28, name: 'Piter Pan', sex: 'twice per day', height: 180, weight: 85}
let worker_2 = new Worker2(worker_2Info, person_2Info);














// @SUPER

/*
 *
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 *
*/
