/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

console.log('\n\nЗадача 0\n');

let y = 5;

let x = () => y;

let z = t => {
  let y = 6;
  return t();
};

console.log(y);
// выведет5. второе определение закрыто в функции.

console.log(z(x)); // что вернет
/* и снова выведет 5. просто потому что других значений нет. Но обращатся будет к переменной 
 которая определяется внутри фукции z. Чтобы было нагляднее, дам ей значение 6. То есть выведет 6.
 Гениально!!!. две ошибки подряд:
 первая - вернет вообще undefined. Потому что у z нет return.
 вторая - вернет таки 5! из первого определения. Потому что стрелочная функция сохраняет свой this. 
*/
 

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 *
 *
 * */

console.log('\n\nЗадача 1\n');

let stringToNode = function(node) {
  return `<${node}></${node}>`;
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

console.log('\n\nЗадача 2\n');

var ezjQuery = {
  value : '',
  add(node){
    if(typeof node !== 'string'){
      console.log('ERROR: value must be a string!');
      return;
    }

    this.value += `<${node}></${node}>`;
    console.log(this.value);
    return this;
  }
};

ezjQuery
  .add('body') // <body></body>
  .add('div') // <body></body><div></div>
  .add('h1') // <body></body><div></div><h1></h1>
  .add(11); // ERROR!

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
*/
/*
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */

console.log('\n\nЗадача 3\n');
var ezjQuery3 = {
  value : [],

  add(node,text){
    if(typeof node !== 'string'){
      console.log('ERROR: value must be a string!');
      return;
    }

    let _text = text || '';
    this.value.push([node,_text]);

    console.log(this._bildString());
    return this;
  },

  _bildString(){
    return this.value.reduceRight(function(resString,node){
        return `<${node[0]}>${node[1]}${resString}</${node[0]}>`;
    },'')
  },

  render(){
    let res = this._bildString();
    this.value = [];
    return res;
  },

  toString(){
    return this._bildString();
  }

};





// example

var helloList = ezjQuery3
  .add('body') // <body></body>
  .add('div','block') // <body><div></div></body>
  .add('ul','list') // <body><div><ul></ul></div></body>
  .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  // .render();
;
console.log('helloList.toString: ', helloList.toString()); // <body><div><ul><li>Hello</li></ul></div></body>
helloList.render();
//  Обратите внимание, что после вызова render создание строки началось сначала
console.log('ВЫзвали render, сбросли строку');

var bodyDiv = ezjQuery3
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();

console.log('bodyDiv.toString: ', bodyDiv.toString()); //<body><div></div></body>

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)
document.write(helloList);
console.log('\n\nЗадача SUPER\n');




// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
 /*
  немного непонятная постановка задачи, в плене сделать объект, но вызвать его как функцию.
  Потому сделал не объект а функцию, которая возвращает даный нужный объект.
 */

function $(node){
  let obj = {};
  obj.value = [];

  obj.add = function(node, text){

    if(typeof node !== 'string'){
      console.log('ERROR: value must be a string!');
      return;
    }

    let _text = text || '';
    this.value.push([node,_text]);
    return this;
  }

  obj._bildString = function(){
    return this.value.reduceRight(function(resString,node){
        return `<${node[0]}>${node[1]}${resString}</${node[0]}>`;
    },'')
  }

  obj.render = function(){
    let res = this._bildString();
    this.value = [];
    console.log(res);
    return res;
  }

  if(node){
    return obj.add(node);
  }else{
    return obj;    
  }

};

$('body').add('li', 'hi').render() // <body><li>hi</li></body>
