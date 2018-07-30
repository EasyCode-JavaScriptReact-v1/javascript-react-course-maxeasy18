/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 *
 * */

const solution = arr => {
	let curMax = -Infinity;
	return arr.reduceRight( (acc,value) => {
		if( value > curMax ){
			curMax = value;
			acc.push(value);
		}
		return acc
	},[]).reverse();
};

console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]
console.log(solution([12, 12, 12])); // [5, 4]


class Carousel{
	constructor(selector){
		this.carouselBlock = document.querySelector(selector);
		const listWitdth = this._calcList().width;
		const listHeight = this._calcList().height;
		this.list = this.carouselBlock.querySelector('ul');
		this.list.style.width = listWitdth + "px";
		this.list.style.height = listHeight + "px";
		this.list.style.left = "0px";
		this.curPosition = 1;
		this._stepSize = this._getStepSize();
		this._appendNavs();
		this._appendClicks();
	}
	_getStepSize(){
		const stepElement = this.carouselBlock.querySelector('ul > li');
		return parseInt(window.getComputedStyle(stepElement)["margin-left"]) + 
				parseInt(window.getComputedStyle(stepElement)["margin-right"]) +
				stepElement.offsetWidth;
	}
	_calcList(){

		const caruselElements = this.carouselBlock.querySelectorAll('ul > li');
		this.size = caruselElements[0]
		let height = 0;
		let width = 0;
		[...caruselElements].forEach( value => {
			const marginsHor = parseInt(window.getComputedStyle(value)["margin-left"]) + 
				parseInt(window.getComputedStyle(value)["margin-right"]);
			const marginsVer = parseInt(window.getComputedStyle(value)["margin-top"]) + 
				parseInt(window.getComputedStyle(value)["margin-bottom"]);
			width += value.offsetWidth + marginsHor; 
			height = Math.max(height, (marginsVer + value.offsetHeight));
		});
		return {height,width};
	}
	_appendNavs(){
		const buttons = `
			<a href="#" class="navs prev">&lArr;prev</a>
			<span class="current-position">current position <span></span></span>
			<a href="#" class="navs next">next&rArr;</a>`;
		const navBlock = document.createElement('div');
		navBlock.className = "nav-block";
		navBlock.innerHTML = buttons;	

		this.carouselBlock.appendChild(navBlock);
		this._writePostition();

	}
	_slideCarousel(button){
		const listElements = this.list.querySelectorAll('li');
		let newPosition = this.curPosition;
		if(button.classList.contains('prev')){
			if( this.curPosition === 1 ){
				newPosition = listElements.length;
			}else{
				newPosition--;				
			}
		
		}else{
			if(this.curPosition === listElements.length ){
				newPosition = 1;
			}else{
				newPosition++;				
			}			
		} 
		this.slideToPosition(newPosition);
		
	}
	slideToPosition(position){
		const steps = 50;
		const time = 300;
		const period = time/steps;
		let curLeft = parseInt(this.list.style.left);
		const newLeft = -1 * (position - 1) * this._stepSize;
		let diff = newLeft - curLeft;
		let moveSlide = () => {
			this.list.style.left = (parseFloat(this.list.style.left) + diff/steps) + 'px';
				if(parseInt(this.list.style.left) !== newLeft){
				setTimeout(() => {
					moveSlide();
				},period);
			}
		}
		moveSlide();
		this.curPosition = position;
		this._writePostition();
	}
	_writePostition(){
		const positionSpan = this.carouselBlock.querySelector(".nav-block > span > span");
		positionSpan.textContent = this.curPosition;
	}
	_appendClicks(){
		const buttons = this.carouselBlock.querySelectorAll('.navs');
		buttons.forEach( value => {
			value.addEventListener("click", event => {
				this._slideCarousel(event.target);
			});
		})
	}
}

const carousel = new Carousel(".carousel");





/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" следующее.
 *
 * 1.1
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * 1.2
 * Добавьте внизу цифры с текущим активным изображением.
 *
 *
 *
 * @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */
// class Carousel {
// }
/*создайте новый instance Carouse при вызове initialize*/
// var myInitializedCarousel = Carousel.initialize({
//   elementToApply: '.carousel',
//   infinity: true,
// });

/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */
// .topStyle('fetch', {backgroundColor:'blue'})
/*
*
* <style>.fetch {
* background-color
* */

/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */


/*
Нужно визуализировать keypad.html -> keypad.js
Нужно визуализировать index.html -> contacts.js !!!
Структура виртуализации:
 >------ Это 2 разных класса KeypadPage, ContactsPage  <-----
innerHTML по максимуму
https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
Сделайте чтобы при нажатии на кнопку цифра отобразилась
в <span class="numbers">
*/

/*
https://aleksandra-maslennikova.github.io/telephone-book/index.html
По клику по заголовку таблицы,
таблица сортировалась по соответствующему свойству
*/