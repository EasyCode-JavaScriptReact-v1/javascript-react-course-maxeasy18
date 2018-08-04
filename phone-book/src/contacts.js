

class Contacts {
  constructor(containerSelector) {
    this.container = document.body.querySelector(containerSelector);
    this.pageName = 'Contacts';
    this.users = users;
    this.orderDirection = 'asc';
    this.container.addEventListener('click', (event) => {
      if(event.target.nodeName === 'TH'){
        let sortBy = event.target.getAttribute("data-name");
        this.users = this.sortUsersBy(sortBy);
        this.orderDirection = this.orderDirection == 'asc' ? 'desc' : 'asc';
        this.render();
      }
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
                    <input type="text" class="form-control" id= "search" placeholder="Search">
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
    const orderDirection = this.orderDirection == 'asc' ? 1 : -1;
    return this.users.sort((a, b) => {
      const propA = this._cleanStringValue(a[prop]); 
      const propB = this._cleanStringValue(b[prop]); 
      if (propA < propB) {
        return -1*orderDirection;
      }
      if (propA > propB) {
        return 1*orderDirection;
      }
      return 0;
    })
  }
  render(){  
    const phoneSource = this.createPhoneSource(); 
    this.container.innerHTML = phoneSource;
    this.insertListOfUsers();
  }
}

const contacts = new Contacts('.container-holder');
contacts.render();