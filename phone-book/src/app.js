class App {
  constructor(appContainerId) {
    this.state = {};
    this.appContainer = document.getElementById(appContainerId);
    this.router = new Router(this);
    this.serverAPI = new ServerAPI();
    const userPage = new EditUser(this);
    this.pages = {
      contacts : {
        pageObject : new Contacts(this),
        href : '/contacts.html'
      },
      keypad : {
        pageObject : new Keypad(this),
        href : '/keypad.html'
      },
      editUser : {
        pageObject : userPage,
        href : '/edit-contact.html'
      },
      user : {
        pageObject : new User(this),
        href : '/user.html'
      },
      addUser : {
        pageObject : userPage,
        href : '/add-user.html'
      }
    }

    const appHtml = this.renderAppContainer();
    this.appContainer.innerHTML = appHtml;
    this.addRouter();

    this.state.pageName = 'Contacts';
    this.updateState({activePage : 'contacts'});
    this.router.gotToPage(this.state,'/index.html');
    this.changePageToActive();
  }

  updateState(newState){
    this.state = {};
    Object.assign(this.state,newState);


  }

  addRouter(){
    this.appContainer.addEventListener('click', (event) => {
      event.preventDefault();
      const container = event.currentTarget;
      let target = event.target;
      while (target != container) {
        if (target.getAttribute("data-page") ) {
          const newPage = target.getAttribute("data-page");
          const newUser = target.getAttribute("data-user-id");
          const newState = { activePage : newPage };
          if(newUser){
            newState.userId = newUser;
          }
          this.updateState(newState);          
          this.router.gotToPage(this.state);
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
    const currentPage = this.pages[activePage].pageObject;  
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

  formatformNumber(number) {
    if(isNaN(number.charAt(0))){
      return number;
    }
    const formatedNumber = number.replace(/(\d{0,3})(\d{0,2})?(\d{0,2})?(\d{0,3})?/, (match,g1,g2,g3,g4) => {
      let res = ''
      if(g1){
        res = `(${g1}`;
      }
      if(g1.length === 3){
        res += `) `;
      }
      if(g2){
        res += `${g2}`;
      }
      if(g3){
        res += `-${g3}`;
      }
      if(g4){
        res += `-${g4}`;
      }
      return res
    });    
    return formatedNumber;
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
                ${this._createFooterIcon( { href: "edit-contact.html", page:"editUser", title: "Edit contact",icon: "pencil",})}
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