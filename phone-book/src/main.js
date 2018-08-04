

class PhoneBook {
  constructor(containerSelector) {
    this.container = document.body.querySelector(containerSelector);
    this.pageName = 'Contacts';
    this.users = users;
  }

  _makeList(){
    const listOfUsers = this.users.map( user => {
      return `
          <tr>
            <td>${user.name}</td>
            <td>${user.cname}</td>
            <td>${user.email}</td>
          </tr>
      `;
    }).join('');
    return `
      <table class="table table-hover contacts">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
      <tbody>
        ${listOfUsers}
      </tbody>
    </table>

    `;    
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
            ${this._makeList()}
        </div>
    </main>
    `;    
  }
  
  _createFooterIcon(iconData){
    return `
    <a href="${iconData.href}" class="tab">
        <span class="glyphicon glyphicon-${iconData.icon}" aria-hidden="true"></span>
        <span class = "tab-text">${iconData.title}</span>
    </a>`    
  }

  createFooterSource(){
    return `
    <footer class="footer">
        <div class="container bottom-radius">
            <nav class="main-nav">
                ${this._createFooterIcon( { href: "index.html",title: "Contacts",icon: "search",})}
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

  renderPhoneBook(){  
    const phoneSource = this.createPhoneSource(); 
    this.container.innerHTML = phoneSource;
  }
}

const phone = new PhoneBook('.container-holder');
phone.renderPhoneBook();