class Model{
	constructor(initialState){
		this.data = initialState;
	}
	addTodoItem(newItem){
		if(!newItem){
			return;
		}
		this.data.push(newItem);
	}

	removeItem(itemToRemove){
		if(!itemToRemove){
			return;
		}
		const itemInData = this.data.indexOf(itemToRemove);
		this.data.splice(itemInData,1);
	}

	updateTodoItem(oldItem,newItem){
		if(!oldItem || !newItem){
			return;
		}
		const oldItemIndex = this.data.indexOf(oldItem);
		this.data[oldItemIndex]	= newItem;
	}
}