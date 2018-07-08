/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
*
*
*
*
* */

function aboutObject(arg){
 
  if(typeof arg === 'object' && Array.isArray(arg) !== true || typeof arg === 'number'){
    return true;
  }
  if(typeof arg === 'function'){
    return false;
  }
  if(typeof arg === 'string'){
    if(arg.length !== 10){
      return `длина вашей строки: ${arg.length}`;
    }else{
      return 'you win';
    }
  }
}
console.log(aboutObject({name:'victor'}));
console.log(aboutObject(123));
console.log(aboutObject([1,2,3]));
console.log(aboutObject(function(){}));
console.log(aboutObject(' this is a'));
console.log(aboutObject(' this is a string '));





/*
*
*  Задача в классе !
*
* */

/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
  let arr = [];
  for(let i=a; i<=b; i++){
    arr.push(i);
  }
  console.log( arr );
  return arr;
}

numbersBetween(3, 5);
// 3, 4, 5

numbersBetween(10, 12);
// 10, 11, 12


/*
-> @@ SUPER !
  Напишите функцию, которая будет
   возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5,
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/



/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(num) {
  let res = null;

  if( num % 3 === 0){    
    res = 'Fizz';
  }

  if( num % 5 === 0){
    if(!res){
      res = 'Buzz';
    }else{
      res += 'Buzz';
    }    
  }
  console.log(num, res ? res : num);
  return ( res ? res : num );
}

function fizzBuzz100() {
  for(let i=1; i<100; i++){
    FizzBuzz(i);
  }
}
fizzBuzz100();

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];
function getTypes(arr){

  let types = [];

  for( value of arr){
    types.push(typeof value);
  }

  return types
}
console.log(getTypes(arr));

/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если age NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */
let ages = [
  { age: 34},
  { age: 'ddd'},
  { age: {}},
  { age: 22},
  { age: []},
  { age: NaN},
  { age: 27}
]

function updateAges(ages){
  for( key in ages){
    if(isNaN(ages[key].age)){
      ages[key].unknownAge = true;
    }
  }
}
updateAges(ages);
console.log(ages);

function newAges(ages){
  let newArr = [];
  for(let i=0; i<ages.length; i++){
    if(ages[i].unknownAge){
      newArr.push(ages[i]);
    }
  }
  return newArr;
}
console.log(newAges(ages));
