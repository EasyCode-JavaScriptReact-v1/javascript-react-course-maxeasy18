/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("y") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

const solution = str => {
	if(str.length<26){
		return false;
	}
	let letters = 'abcdefghijklmnopqrstuvwxyz';
	for( let i=0; i<letters.length; i++){
		const templ = new RegExp(letters.slice(i,i+1),'gmi');
		if(!templ.test(str)){
			return false;
		}
	}
	return true;
};

console.log('wyyga',solution("wyyga") );
console.log('qwertyuioplkjhgfdsazxcvbnm',solution("qwertyuioplkjhgfdsazxcvbnm") );
console.log('ejuxggfsts',solution("ejuxggfsts") );
console.log('qpwoeirutyalskdjfhgmznxbcv',solution("qpwoeirutyalskdjfhgmznxbcv") );
console.log('qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv',solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") );
console.log('0123456789abcdefghijklmnop',solution("0123456789abcdefghijklmnop") );

/*
 2. Напишите функция которая преобразовывает / открывает
 скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество
 внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1, 2, 3, 4, 5, 10]
 [25, 10, [10, [15]]] => [25, 10, 10, 15]
 [1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ] => [1, 2, {a: "b"}]
 */

//#1 arr == [...] flattenedArray = [1] + flatten = [2, [{a: "b"}, { c: 'd' }]]
//#2 arr == [2, [ {a: "b"}, { c: 'd' } ] ] flattenedArray = [2] + flatten == [{a: "b"}, { c: 'd' }]
//#3 arr == [ {a: "b"}, { c: 'd' } ] flattenedArray = [{a: "b"}, { c: 'd' }]
//#
const flatten = arr => {
	let res = [];
	let subFlatten = arr => {
		arr.forEach( value => {
			if(!Array.isArray(value)){
				res.push(value);
			}else{
				subFlatten(value);
			}
		});
	}
	subFlatten(arr);
	return res;
};

console.log(flatten([[1,2],[3,[4]],5, 10]));
console.log(flatten([25, 10, [10, [15]]]));
console.log(flatten([1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ]));


/*
Виртуализировать таблицу, сделать рендер всей
таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/