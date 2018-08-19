class App {
  constructor(appContainerId) {
    this.state = {};
    this.appContainer = document.getElementById(appContainerId);
    this.router = new Router(this);
    this.serverAPI = new ServerAPI();
    this.pages = {
      contacts : new Contacts(this),
      keypad : new Keypad(this.appContainer),
      editContact : new EditContact(this.appContainer),
      user : new User(this),
      addUser : new AddUser(this.appContainer),
    }

    const appHtml = this.renderAppContainer();
    this.appContainer.innerHTML = appHtml;
    this.addRouterToFooter();

    this.state.pageName = 'Contacts';
    this.updateState({activePage : 'contacts'});
    this.router.gotToPage({activePage : 'contacts'},'/index.html');
    this.changePageToActive();
  }

  updateState(newState){
    this.state = {};
    Object.assign(this.state,newState);
  }

  addRouterToFooter(){
    const tabs = this.appContainer.querySelector("nav.main-nav");
    tabs.addEventListener('click', (event) => {
      event.preventDefault();
      const container = event.currentTarget;
      let target = event.target;
      while (target != container) {
        if (target.nodeName == 'A' && target.classList.contains('tab') ) {
          const href = target.href;
          const newPage = target.getAttribute("data-page");
          this.updateState({activePage : newPage});          
          this.router.gotToPage({activePage : newPage},href);
          this.changePageToActive();
          return;
        }
        target = target.parentNode;
      }
    });  
  }

  changePageToActive(){
    this.updateTitle();
    this.insertCurrentPage();
    this.initPageEventListeners();
  }
  updateTitle(){    
    const currentPage = this.getCurrentPage(); 
    const title = this.appContainer.querySelector('header > div > h2');
    title.textContent = currentPage.title;
  }

  getCurrentPage(){
    const activePage = this.state.activePage;
    const currentPage = this.pages[activePage];  
    return currentPage;  
  }

  initPageEventListeners(){
    const currentPage = this.getCurrentPage(); 
    currentPage.initEvents();
  }
  
  renderAppContainer(){
    return `
    ${this.renderAppHead()}
    ${this.renderAppPage()}
    ${this.renderAppFooter()}    
    `;
  }

  renderAppHead(){
    return `
        <header class="header">
            <div class="container top-radius">
                <h2></h2>
            </div>
        </header>   
    `;
  }

  renderAppFooter(){
    return `
    <footer class="footer">
        <div class="container bottom-radius">
            <nav class="main-nav">
                ${this._createFooterIcon( { href: "index.html", page:"contacts", title: "Contacts",icon: "search", active: true})}
                ${this._createFooterIcon( { href: "keypad.html", page:"keypad", title: "Keypad",icon: "th",})}
                ${this._createFooterIcon( { href: "edit-contact.html", page:"editContact", title: "Edit contact",icon: "pencil",})}
                ${this._createFooterIcon( { href: "user.html", page:"user", title: "User",icon: "user",})}
                ${this._createFooterIcon( { href: "add-user.html", page:"addUser", title: "Add user",icon: "plus",})}
            </nav>
        </div>
    </footer>
    `;    
  }
  renderAppPage(){
    return `
    <main>
    </main>
    `;                
  }

  insertCurrentPage(){
    const placeForPage = this.appContainer.querySelector('main');
    placeForPage.innerHTML = this.renderCurrentPage();
  }

  renderCurrentPage(){
    const currentPage = this.getCurrentPage(); 
    return currentPage.render();
  }

  _createFooterIcon(iconData){
    return `
    <a href="${iconData.href}" data-page="${iconData.page}" class="tab ${(iconData.active?'active':'')}">
        <span class="glyphicon glyphicon-${iconData.icon}" aria-hidden="true"></span>
        <span class = "tab-text">${iconData.title}</span>
    </a>`    
  }
}
const app = new App('app');