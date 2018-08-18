class App {
  constructor(appContainerId) {
    this.state = {}
    this.appContainer = document.getElementById(appContainerId);
    this.pages = {
      contacts : new Contacts(this.appContainer),
      keypad : new Keypad(this.appContainer),
      editContact : new EditContact(this.appContainer),
      user : new User(this.appContainer),
      addUser : new AddUser(this.appContainer),
    }
    
    this.state.pageName = 'Contacts'
    this.state.activePage = "contacts";

    const appHtml = this.renderAppContainer();
    this.appContainer.innerHTML = appHtml;

    this.router = new Router(this);
    
    // this.currentPage = this.pages.contacts;
    // this.initRouter();
    // this.changePageTo(this.activePage);

  }

  changePageTo(newPageName){
    this.currentPage = this.pages[newPageName];
    this.insertCurrentPage();
    this.initPageEventListeners();
  }

  initPageEventListeners(){
      this.currentPage.initEvents();
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
                <h2>${this.pageName}</h2>
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
            // ${this.renderCurrentPage()}
  }

  insertCurrentPage(){
    const placeForPage = this.appContainer.querySelector('main');
    placeForPage.innerHTML = this.renderCurrentPage();
  }

  renderCurrentPage(){    
    return this.currentPage.render();
  }

  _createFooterIcon(iconData){
    return `
    <a href="${iconData.href}" data-page="${iconData.page}" class="tab ${(iconData.active?'active':'')}">
        <span class="glyphicon glyphicon-${iconData.icon}" aria-hidden="true"></span>
        <span class = "tab-text">${iconData.title}</span>
    </a>`    
  }

  initializeRouter() {
    /*
    * 1) Если обновлять контент внутри тэга
    * 2)
    *
    * */
    mountNode.innerHTML = `
        <main>
         <div id="app"></div>
         <footer>
            <a>contacts</a>
            <a>edit</a>
            <a>keypad</a>
          </footer>
        </main>
    `;
    this.initializeRouterHandlers();
    this.appDOMNode = mountNode.getElementById('app');
  }

  renderNewPage() {
    this.appDOMNode.innerHTML = this.pages[activePage].render();
  }

  updateView() {
    this.pages[activePage].updateState(this.state);
  }

  render() {
    const {
      activePage,
    } = this.state;

    this.updateView();
    this.pages[activePage].render();
  }
}
const app = new App('app');