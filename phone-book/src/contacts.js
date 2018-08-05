

class Contacts {
  constructor(containerSelector) {
    this.container = document.body.querySelector(containerSelector);
    this.pageName = 'Contacts';
    this.users = users;
    this.usersOrderDirection = 'asc';
    this.container.addEventListener('click', (event) => {
      if(event.target.nodeName === 'TH'){
        let sortBy = event.target.getAttribute("data-name");
        this.users = this.sortUsersBy(sortBy);
        this.usersOrderDirection = this.usersOrderDirection == 'asc' ? 'desc' : 'asc';
        this.insertListOfUsers();
      }
    });



  }

  initSearch(){
    document.getElementById('search').addEventListener('keyup', (event) => {
      if(event.target.value === ''){
        this.users = users;
      }else{
        this.users = this.filterBy('name',event.target.value);
      }
      this.insertListOfUsers();
      // console.log(event.target.value);
    });    
  }
  renderListOfUsers(){
    return this.users.map( user => {
      return `
          <tr>
            <td>${user.name}</td>
            <td>${user.cname}</td>
            <td>${user.email}</td>
          </tr>
      `;
    }).join('');    
  }

  renderContactsList(){
    return `
      <table class="table table-hover contacts">
        <thead>
          <tr>
            <th data-name="name">Name</th>
            <th data-name="cname">Last name</th>
            <th data-name="email">Email</th>
          </tr>
        </thead>
      <tbody>
       
      </tbody>
    </table>

    `;    
  }

  insertListOfUsers(){
    const containerForList = this.container.querySelector('table > tbody');
    containerForList.innerHTML = this.renderListOfUsers();
  }

  createHeaderSource(){
    return `
        <header class="header">
            <div class="container top-radius">
                <h2>${this.pageName}</h2>
            </div>
        </header>   
    `;
  }

  createMainSource(){
    return `
    <main>
        <div class="container">
            <form class="form-inline search-form">
                <div class="form-group">
                    <label class="sr-only" for="search">Search</label>
                    <input type="text" class="form-control search-input" id= "search" placeholder="Search">
                </div>
            </form>
            ${this.renderContactsList()}
        </div>
    </main>
    `;    
  }
  
  _createFooterIcon(iconData){
    return `
    <a href="${iconData.href}" class="tab ${(iconData.active?'active':'')}">
        <span class="glyphicon glyphicon-${iconData.icon}" aria-hidden="true"></span>
        <span class = "tab-text">${iconData.title}</span>
    </a>`    
  }

  createFooterSource(){
    return `
    <footer class="footer">
        <div class="container bottom-radius">
            <nav class="main-nav">
                ${this._createFooterIcon( { href: "index.html",title: "Contacts",icon: "search", active: true})}
                ${this._createFooterIcon( { href: "keypad.html",title: "Keypad",icon: "th",})}
                ${this._createFooterIcon( { href: "edit-contact.html",title: "Edit contact",icon: "pencil",})}
                ${this._createFooterIcon( { href: "user.html",title: "User",icon: "user",})}
                ${this._createFooterIcon( { href: "add-user.html",title: "Add user",icon: "plus",})}
            </nav>
        </div>
    </footer>
    `;    
  }
  createPhoneSource(){
    return `
    ${this.createHeaderSource()}
    ${this.createMainSource()}
    ${this.createFooterSource()}    
    `;
  }
  _cleanStringValue(name) {  
    return name.toLowerCase().trim()
  }
  sortUsersBy(prop) {
    const usersOrderDirection = this.usersOrderDirection == 'asc' ? 1 : -1;
    return this.users.sort((a, b) => {
      const propA = this._cleanStringValue(a[prop]); 
      const propB = this._cleanStringValue(b[prop]); 
      if (propA < propB) {
        return -1*usersOrderDirection;
      }
      if (propA > propB) {
        return 1*usersOrderDirection;
      }
      return 0;
    })
  }

  findUser(name) {
    const userWithName = this.filterBy('name',name);
    const userWithCname = this.filterBy('cname',name);
    return userWithName.concat(userWithCname);
  }

  filterBy(prop, value) {
    const letFilterBy = user => {
      return user[prop].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
    return this.users.filter(letFilterBy);    
  }

  render(){  
    const phoneSource = this.createPhoneSource(); 
    this.container.innerHTML = phoneSource;
    this.insertListOfUsers();
    this.initSearch();
  }
}

const contacts = new Contacts('.container-holder');
contacts.render();