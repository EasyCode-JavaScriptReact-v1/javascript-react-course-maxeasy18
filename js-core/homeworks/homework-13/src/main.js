/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

/* TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human
*/

class Human {
	constructor(info){
		this.name = info.name;
		this.age = info.age;
		this.sex = info.sex;
		this.height = info.height;
		this.weight = info.weight;
	}
}

class Worker extends Human {
	constructor(info){
		super(info);
		this.work = info.work;
		this.salary = info.salary;

	}
	toWork(){
		console.log(`${this.name} works on ${this.work} for ${this.salary}. 
			His sex is ${this.sex}`);
	}
}

let workerInfo = {
	name: 'Jack',
	age: 28,
	sex: 'male',
	height: '180sm',
	weight: '85kg',
	work: 'plant',
	salary: 1200
}

let worker1 = new Worker(workerInfo);
worker1.toWork();

class Student extends Human{
	constructor(info){
		super(info);
		this.studyIn = info.studyIn;
		this.stipend = info.stipend;
	}	
	relax(){
		console.log(`${this.name} is watching TV with her fiends. 
			She is studing in ${this.studyIn} and has stipenв about ${this.stipend}`)
	}
}

let student1Info = {
	name: 'Jane',
	age: 22,
	sex: 'female',
	height: '160sm',
	weight: '55kg',
	studyIn: 'university',
	stipend: 200
}

let student2Info = {
	name: 'John',
	age: 19,
	sex: 'male',
	height: '190sm',
	weight: '75kg',
	studyIn: 'hight school',
	stipend: 'none'
}

let student1 = new Student(student1Info);
let student2 = new Student(student2Info);
student1.relax();
student2.relax();

console.log('student2 instanceof Student =>' , student2 instanceof Student );
console.log('student1 instanceof Human =>' , student1 instanceof Human );
console.log('worker1 instanceof Human =>' , worker1 instanceof Human );
console.log('worker1 instanceof Student =>' , worker1 instanceof Student );
console.log('student2 instanceof Worker =>' , student2 instanceof Worker );

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
	constructor(){
		this._timer;
		this._counter;		
	}	


	query(){
		clearInterval(this._timer);
		this._counter = 5;
		this._timer = setInterval(() => {
				if(this._counter > 0){
					console.log(this._counter--);
				}else{
					clearInterval(this._timer);
					console.log('The web server is down');
				}
			},1000);
	}
}

const dataBase = new DataBase();
dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')