

class AddUser {
  constructor(containerSelector) {
    this.container = document.body.querySelector(containerSelector);
    this.pageName = 'Keypad';
    this.users = users;
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
      <div class="edit-main-info">
        <div class="edit-foto">
          <button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <span>add foto</span></button>
          </div>
          <div class="main-info-holder">
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>First Name</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>Last Name</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>Company</span>
              </button>
            </div>
          </div>
        </div>
        <div class="scroll-holder">
          <div class="edit-info">
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add mobile phone</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add  home phone</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add email</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add address</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add birthday</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add social profile</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add field</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="delete-contact">delete contact</button>
            </div>
          </div>
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
                ${this._createFooterIcon( { href: "keypad.html",title: "Keypad",icon: "th"})}
                ${this._createFooterIcon( { href: "edit-contact.html",title: "Edit contact",icon: "pencil"})}
                ${this._createFooterIcon( { href: "user.html",title: "User",icon: "user"})}
                ${this._createFooterIcon( { href: "add-user.html",title: "Add user",icon: "plus", active: true})}
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

const addUser = new AddUser('.container-holder');
addUser.render();