

class PhoneBook {
  constructor() {
    this.listHeads = ['Name','Last name','Email'];
    this.container = document.body.querySelector('main > .container');
    this.users = [
	  {
	    name: "Иван",
	    cname: "Петров",
	    email: "IvanPetrov@ec.ua"
	  },
	  {
	    name: "Сергей",
	    cname: "Сергеев",
	    email: "SergeiSergeev@ec.ua"
	  },
	  {
	    name: "Иван",
	    cname: "Иванов",
	    email: "IvanIvanov@ec.ua"
	  },
	  {
	    name: "Александр",
	    cname: "Александров",
	    email: "AlexAlex@ec.ua"
	  },
	  {
	    name: "Алекс",
	    cname: "Смирнов",
	    email: "AlexSmirnov@ec.ua"
	  },
	  {
	    name: "Сергей",
	    cname: "Волков",
	    email: "VolkovSergey@ec.ua"
	  },
	  {
	    name: "Мария",
	    cname: "Шарапова",
	    email: "MariyaSharapova@ec.ua"
	  },
	  {
	    name: "Александр",
	    cname: "Винник",
	    email: "AlexVinnik@ec.ua"
	  },
	  {
	    name: "Дарий",
	    cname: "Смирнов",
	    email: "DariySmirnov@ec.ua"
	  },
	  {
	    name: "Елена",
	    cname: "Лещенко",
	    email: "ElenaLeshenko@ec.ua"
	  },
	  {
	    name: "Ольга",
	    cname: "Новикова",
	    email: "OlgaNovikova@ec.ua"
	  },
	  {
	    name: "Наталья",
	    cname: "Шемякина",
	    email: "ShemyakinaN@ec.ua"
	  },
	  {
	    name: "Анна",
	    cname: "Донцова",
	    email: "AnnaDontsova@ec.ua"
	  },
	  {
	    name: "Влад",
	    cname: "Яма",
	    email: "VladYama@ec.ua"
	  },
	  {
	    name: "Кира",
	    cname: "Воробьева",
	    email: "Kira1990@ec.ua"
	  },
	  {
	    name: "Виктор",
	    cname: "Кривенко",
	    email: "ViktorKriv@ec.ua"
	  }
	];

  }

  _makeNode(node,text){
  	const nodeElement = document.createElement(node)
	if(!text){
	  	return nodeElement; 
	}
	nodeElement.innerText = text;
	return nodeElement;
  }

  _getUsersListFields(){
  	return Object.keys(this.listHeads);
  }

  _makeUserListHead(user){ 
  	const fields = this._getUsersListFields();
	const tr = this._makeNode('tr');

	const headers = ['Name','Last name','Email']
	for( let i=0; i<3; i++){
		const td = this._makeNode( 'th', headers[i]);		
		tr.appendChild(td);
	}
	return tr;  	
  } 	
  _makeUserListRow(user){  	
	const tr = this._makeNode('tr');
	const userProps = ['name','cname','email'];
	for( let i=0; i<3; i++){
		const td = this._makeNode( 'td', user[userProps[i]]);		
		tr.appendChild(td);
	}			
	return tr;
  }

  _makeheader(){
  	const tableHead = this._makeNode('thead');  	
  	const headersRow = this._makeUserListHead();
  	tableHead.appendChild(headersRow)
  	return tableHead;
  }

  _makeListBody(){
  	const tableBody = this._makeNode('tbody');  	
	this.users.forEach((userInfo) => {
		const usersRow = this._makeUserListRow(userInfo)		
		tableBody.appendChild(usersRow);
  	});  	
  	return tableBody;
  }

  _makeList(){
	const table = this._makeNode('table');  
	table.className = 'table table-hover contacts';

	const tableHeader = this._makeheader();
	table.appendChild(tableHeader);  	

	const tbody = this._makeListBody();
	table.appendChild(tbody);  		

	return table;
  }


  renderList(){  	
	this.container.appendChild(this._makeList());
  }
}

const phone = new PhoneBook();
phone.renderList();