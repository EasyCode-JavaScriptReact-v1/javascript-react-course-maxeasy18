

class EditContact {
  constructor(containerSelector) {
    this.container = document.body.querySelector(containerSelector);
    this.pageName = 'Edit Contact';
    this.users = users;

  }
  prepareEditableFields(){
    const editButtons = this.container.querySelectorAll('a.add-btn');
    editButtons.forEach(( value ) => {
      value.children[1].contentEditable = 'true';
    });
    this.container.addEventListener('click', (event) => {
      if( event.target.nodeName == 'A' && event.target.classList.contains('add-btn')){
        event.target.children[1].backgroundColor = 'purple';
      }
    });    
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
        <div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>
        <div class="main-info-holder">
          <div class="edit-field">
            <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
              <span>First Name</span>
            </a>
          </div>
          <div class="edit-field">
            <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
              <span>Last Name</span>
            </a>
          </div>
          <div class="edit-field">
            <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
              <span>Company</span>
            </a>
          </div>
        </div>
      </div>
      <div class="scroll-holder">
        <div class="edit-info">
          <div class="edit-field">
            <a href="#" class="delete-btn"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
              <span>phone</span>
              <span>+38 (063) 733 44 55</span>
              </a>
            </div>
            <div class="edit-field">
              <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add  home phone</span>
              </a>
            </div>
            <div class="edit-field">
              <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add email</span>
              </a>
            </div>
            <div class="edit-field">
              <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add address</span>
              </a>
            </div>
            <div class="edit-field">
              <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add birthday</span>
              </a>
            </div>
            <div class="edit-field">
              <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add social profile</span>
              </a>
            </div>
            <div class="edit-field">
              <a href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>add field</span>
              </a>
            </div>
            <div class="edit-field">
              <a href="#" class="delete-contact">delete contact</a>
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
                ${this._createFooterIcon( { href: "edit-contact.html",title: "Edit contact",icon: "pencil", active: true})}
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
    this.prepareEditableFields();
  }
}

const editContact = new EditContact('.container-holder');
editContact.render();