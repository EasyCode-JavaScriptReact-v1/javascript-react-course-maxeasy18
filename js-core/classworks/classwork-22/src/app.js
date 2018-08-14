(function(){
	const initialState = [
		'one',
		'two',
		'three'
	];

	const view = new View(initialState);
	const model = new Model(initialState);
	const constroller = new Controller(view,model);
	console.log(constroller);
})();