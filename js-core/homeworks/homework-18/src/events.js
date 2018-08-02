
// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/

let section = document.getElementsByTagName('section')[0];
let clickedBlock;
let changeBlockSize = function(event){
	let movementDiff = clickedBlock.clickedAt - event.pageX;
	let newWidth = clickedBlock.startWidth + movementDiff;
	clickedBlock.style.width = newWidth + 'px';
}

section.addEventListener('mousedown', function(event){
	if(event.target.classList.contains('resize')){
		clickedBlock = event.target;
		clickedBlock.clickedAt = event.pageX;
		clickedBlock.startWidth = event.target.offsetWidth;
		document.body.addEventListener('mousemove', changeBlockSize);
	}
});

document.body.addEventListener('mouseup', function(){
	document.body.removeEventListener('mousemove', changeBlockSize);
});


