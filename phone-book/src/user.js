

class User {
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
        <img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
        <div class="user-name">User Name</div>
        <div class="options-line">
          <div class="message">
            <div class= "options-icon"><span class="icon glyphicon glyphicon-comment" aria-hidden="true"></span></div>
            <span class = "options-text">message</span>
          </div>
          <div class="call">
            <div class= "options-icon"><span class="icon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
            <span class = "options-text">call</span>
          </div>
          <div class="video">
            <div class= "options-icon"><span class="icon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></div>
            <span class = "options-text">video</span>
          </div>
          <div class="mail">
            <div class= "options-icon"><span class="icon glyphicon glyphicon-envelope" aria-hidden="true"></span></div>
            <span class = "options-text">mail</span>
          </div>
        </div>
        <div class="tel-number">
          <h3>mobile</h3>
          <div> +38 (093) 989 89 89</div>
        </div>
        <div class="tel-number">
          <h3>home</h3>
          <div> +38 (093) 989 89 89</div>
        </div>
        <div class="options-table">
          <div class ="options-item"><a href="#">Notes</a></div>
          <div class ="options-item"><a href="#">Send message</a></div>
          <div class ="options-item"><a href="#">Share contact</a></div>
          <div class ="options-item"><a href="#">Add to favorites</a></div>
          <div class ="options-item"><a href="#">Share my location</a></div>
          <div class ="options-item"><a href="#">Block this caller</a></div>
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
                ${this._createFooterIcon( { href: "user.html",title: "User",icon: "user", active: true})}
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

const user = new User('.container-holder');
user.render();