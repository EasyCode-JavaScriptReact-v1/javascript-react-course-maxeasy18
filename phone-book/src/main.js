

class PhoneBook {
  constructor() {
    this.listHeads = { name: 'Name', cname: 'Last name', email:'Email' };
    this.listContainerSelector = 'main > .container';
    this.users = [{	name: 'Иван',
				cname: 'Петров',
				email: 'IvanPetrov@ec.ua'},
				{	name: 'Сергей',
				cname: 'Сергеев',
				email: 'SergeiSergeev@ec.ua'},
					{name: 'Иван',
					cname: 'Иванов',
					email: 'IvanIvanov@ec.ua'},
					{name: 'Александр',
					cname: 'Александров',
					email: 'AlexAlex@ec.ua'}
					,
				{	name: 'Алекс',
				cname: 'Смирнов',
				email: 'AlexSmirnov@ec.ua'},
				{	name: 'Сергей',
				cname: 'Волков',
				email: 'VolkovSergey@ec.ua'},
				{	name: 'Мария',
				cname: 'Шарапова',
				email: 'MariyaSharapova@ec.ua'},
				{	name: 'Александр',
				cname: 'Винник',
				email: 'AlexVinnik@ec.ua'},
				{	name: 'Дарий',
				cname: 'Смирнов',
				email: 'DariySmirnov@ec.ua'},
				{	name: 'Елена',
				cname: 'Лещенко',
				email: 'ElenaLeshenko@ec.ua'},
				{	name: 'Ольга',
				cname: 'Новикова',
				email: 'OlgaNovikova@ec.ua'},
				{	name: 'Наталья',
				cname: 'Шемякина',
				email: 'ShemyakinaN@ec.ua'},
				{	name: 'Анна',
				cname: 'Донцова',
				email: 'AnnaDontsova@ec.ua'},
				{	name: 'Влад',
				cname: 'Яма',
				email: 'VladYama@ec.ua'},
				{	name: 'Кира',
				cname: 'Воробьева',
				email: 'Kira1990@ec.ua'},
				{	name: 'Виктор',
				cname: 'Кривенко',
				email: 'ViktorKriv@ec.ua'}
				]
  }

  _makeNode(node,text){
	if(!text){
	  	return document.createElement(node); 
	}
	let nodeElement = document.createElement(node); 
	nodeElement.innerText = text;
	return nodeElement;
  }

  _getUsersListFields(){
  	return Object.keys(this.listHeads);
  }

  _makeUserListRow(user,nodeType){  	
  	let fields = this._getUsersListFields();
	let tr = this._makeNode('tr');
	fields.forEach((field) => {
		let td = this._makeNode( (nodeType ? nodeType : 'td') ,user[field]);		
		tr.appendChild(td);
	});  	
	return tr;
  }

  _makeheader(){
  	let tableHead = this._makeNode('thead');  	
  	let headersRow = this._makeUserListRow(this.listHeads,'th');
  	tableHead.appendChild(headersRow)
  	return tableHead;
  }

  _makeListBody(){
  	let tableBody = this._makeNode('tbody');  	
	this.users.forEach((userInfo) => {
		let usersRow = this._makeUserListRow(userInfo)		
		tableBody.appendChild(usersRow);
  	});  	
  	return tableBody;
  }

  _makeList(){
	let table = this._makeNode('table');  
	table.className = 'table table-hover contacts';

	let tableHeader = this._makeheader();
	table.appendChild(tableHeader);  	

	let tbody = this._makeListBody();
	table.appendChild(tbody);  		

	return table;
  }


  renderList(){
  	let container = document.body.querySelector(this.listContainerSelector);
	container.appendChild(this._makeList());
  }
}

let phone = new PhoneBook();
phone.renderList();