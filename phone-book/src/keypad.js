

class Keypad {
  constructor(containerSelector) {
    this.container = document.body.querySelector(containerSelector);
    this.pageName = 'Keypad';
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
  <main class="main">
    <div class="container">
      <div class="number">
        <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        <span class ="numbers">(050)5005050</span>
        <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
      </div>
      <div class="keypad-holder">
        <button class="key">1</button>
        <button class="key">2</button>
        <button class="key">3</button>
        <button class="key">4</button>
        <button class="key">5</button>
        <button class="key">6</button>
        <button class="key">7</button>
        <button class="key">8</button>
        <button class="key">9</button>
        <button class="key">*</button>
        <button class="key">0</button>
        <button class="key">#</button>
        <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
      </div>
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
                ${this._createFooterIcon( { href: "index.html",title: "Contacts",icon: "search"})}
                ${this._createFooterIcon( { href: "keypad.html",title: "Keypad",icon: "th", active: true})}
                ${this._createFooterIcon( { href: "edit-contact.html",title: "Edit contact",icon: "pencil"})}
                ${this._createFooterIcon( { href: "user.html",title: "User",icon: "user"})}
                ${this._createFooterIcon( { href: "add-user.html",title: "Add user",icon: "plus"})}
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






  render(){  
    const phoneSource = this.createPhoneSource(); 
    this.container.innerHTML = phoneSource;
  }
}

const keypad = new Keypad('.container-holder');
keypad.render();