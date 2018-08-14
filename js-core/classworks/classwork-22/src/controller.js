function Controller(view,model){
	this.model = model;
	this.view = view;
	this.init();
}

Controller.prototype.init = function(argument){
	this.addHandlerForAddTsk();
}

Controller.prototype.addHandlerForAddTsk = function(argument){
	this.view.elements.addButton.addEventListener('click', this.addTask.bind(this));
}

Controller.prototype.addTask = function(argument){
	const newTodo = this.view.elements.input.value;
	this.model.addTodoItem(newTodo);
	this.view.render(this.model.data);
	this.view.updateInput();
};