
/* EASY
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов,
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/

function solution(sentence){
	// regex is copypasta
	let sentenceNoCommas = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gmi,'');
	console.log(sentence);
	let sentenceArray = sentenceNoCommas.split(' ');
	sentenceArray = sentenceArray.filter( value => value !== '');
	let wordsLength = sentenceArray.reduce( (acc,value) => {
		return acc + value.length;
	},0);
	let avgWordLength = wordsLength/sentenceArray.length;
	console.log('sentence:', sentence);
	console.log('avgWordLength',avgWordLength);
	// sentenceArray = sentenceArray.map( value => {
	// });
	return sentenceArray.filter( value => value.length > avgWordLength);
}
console.log(solution("This, ,is,  a, sample , string"));
console.log('-----------------');
console.log(solution("Some another sample"));
console.log('-----------------');

console.log(solution("Do, do, do, do... do it!"));


/*
Подготовка к занятию в пятницу.
Windows:
  Установите все node.js скачать отсюда -> https://nodejs.org/en/
  Скачайте последнюю 10.x.x версию
  Для проверки установки в консоле введите "node -v" (без кавычек) отобразит версию node.js
Linux:
 sudo apt install npm // установить менеджер пакетов npm
 npm i -g n // установить пакет для установки node.js
 sudo n latest // установить последнюю версию node.js
*/


/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]


*/
const table = document.getElementsByTagName('table')[0];
let getClickedPosition = function(td){
	let position = {
		x:1,
		y:1
	}
	let xElement = td;
	while(xElement.previousElementSibling){
		position.x++;
		xElement = xElement.previousElementSibling
	}
	let yElement = td.parentElement;
	while(yElement.previousElementSibling){
		position.y++;
		yElement = yElement.previousElementSibling
	}		
	return position;
}
let reversePosition = function(clickedPosition){
	return {
		x: (6 - clickedPosition.x), 
		y: (6 - clickedPosition.y)
	}
}
let findTdAtPosition = function(position){
	let tr = table.children[0].children[position.y - 1];
	let td = tr.children[position.x - 1];
	return td;
}
table.addEventListener('click', (event) =>{
	if(event.target.nodeName === 'TD'){
		let clickedPosition = getClickedPosition(event.target);
		let needFirePosition = reversePosition(clickedPosition);
		let toFireTd = findTdAtPosition(needFirePosition);
		toFireTd.classList.toggle('selected');
	}else{
		console.error('Not a TD element');
	}
});

// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/