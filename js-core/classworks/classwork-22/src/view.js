class View{
	constructor(initialState){
		this.elements = {
			addButton : document.querySelector('.controls__add'),
			listItems : document.querySelector('.list'),
			input : document.querySelector('.controls__input'),
		}
		this.render(initialState);
	}
	render(newData){
		const list = newData.map( todo => `<li>${todo}</li>`).join('');
		this.elements.listItems.innerHTML = list;
	}
	updateInput(value){

		this.elements.input.value = ( value ? value : '' );
	}
}