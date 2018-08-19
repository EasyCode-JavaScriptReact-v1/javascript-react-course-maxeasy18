

class EditUser {
  constructor(app) {
    this.title = 'Add User'
    this.app = app;
    this.appContainer = app.appContainer;
  }

  initEvents(){
    // this.createPlaceholders();
    this.initSaveEvent();
    if(this.app.state.userId){
      this.initDeleteEvent();
      this.renderUserData();
    }
  }

  setCaretToEnd(node) {
    let range = document.createRange();
    let sel = window.getSelection();
    range.setStart(node, 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }
  renderUserData(){
    const contactObj = this.app.pages.contacts.pageObject;
    const userId = this.app.state.userId;
    this.getUser();
  }

  getUser(){
    const userId = this.app.state.userId;
    const serverAPI = this.app.serverAPI;
    const loadingUser = serverAPI.getUser(userId);
    loadingUser.then( response => {
      return response.json();
    })
    .then(user => {
      const fullNameField = this.appContainer.querySelector('span[data-name="fullName"]');
      fullNameField.textContent = user.fullName;

      const emailField = this.appContainer.querySelector('span[data-name="email"]');
      emailField.textContent = user.email;

      const phoneField = this.appContainer.querySelector('span[data-name="phone"]');
      phoneField.textContent = user.phone;
    })
    .catch( err => {
      console.error(err.message);
    });

  }

  updateUser(data){
    const serverAPI = this.app.serverAPI;
    const updatingUser = serverAPI.updateUser(data);
    updatingUser.then( response => {
     this.app.pages.contacts.pageObject.users = [];
      const newPage = 'contacts';
      const newState = { activePage : newPage };
      this.app.updateState(newState);          
      this.app.router.gotToPage(this.app.state);
      this.app.changePageToActive();
    })
    .catch( err => {
      console.error(err.message);
    });    
  }

  addUserToServer(data){
    const serverAPI = this.app.serverAPI;
    const addingUser = serverAPI.addUser(data);
    addingUser.then( response => {
      return response.json();
    })
    .then(addedUser => {
        this.app.pages.contacts.pageObject.users = [];
        const newPage = 'user';
        const newUser = addedUser._id;
        const newState = { activePage : newPage };
        if(newUser){
          newState.userId = newUser;
        }
        this.app.updateState(newState);          
        this.app.router.gotToPage(this.app.state);
        this.app.changePageToActive();
    })
    .catch( err => {
      console.error(err.message);
    });    
  }
  deleteUser(id){
    const serverAPI = this.app.serverAPI;
    const deletingUser = serverAPI.deleteUser(id);
    deletingUser.then( response => {
      this.app.pages.contacts.pageObject.users = [];
      const newPage = 'contacts';
      const newState = { activePage : newPage };
      this.app.updateState(newState);          
      this.app.router.gotToPage(this.app.state);
      this.app.changePageToActive();
    })
    .catch( err => {
      console.error(err.message);
    });     
  }

  initDeleteEvent(){
    const saveButton = this.appContainer.querySelector('button.delete-contact');
    saveButton.style.display = 'inline-block';
    saveButton.addEventListener('click', (event) => {
      this.deleteUser(this.app.state.userId);
    });    
  }

  initSaveEvent(){
    const saveButton = this.appContainer.querySelector('button.save-contact');
    saveButton.addEventListener('click', (event) => {
      const newUserData = this.grabUserData();
      if(newUserData.phone && newUserData.email && newUserData.fullName){
        if(!this.app.state.userId){
          this.addUserToServer(newUserData);
        }else{
          newUserData.userId = this.app.state.userId;
          this.updateUser(newUserData);
        }
      }
    });
  }

  grabUserData(){
    const editableFields = this.appContainer.querySelectorAll('span[data-name]');
    return [...editableFields].reduce( (acc,elem) => {
      
      if(this.validateField(elem)){
        acc[elem.getAttribute('data-name')] = elem.textContent.trim();
      }
      return acc; 
    },{});
  }

  validateField(elem){
    const classes = elem.parentElement.classList;
    if(elem.textContent.trim() != ''){
      classes.remove("delete-btn")
      classes.add("add-btn");      
      return true;
    }
    classes.remove("add-btn")
    classes.add("delete-btn");
    return false;
  }


  render(){
    return `
    <div class="container">
      <div class="edit-main-info">
        <div class="edit-foto">
          </div>
          <div class="main-info-holder">
            <div class="edit-field">
              <div class="add-btn">
                <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                Full Name:<span data-name="fullName" contenteditable="true" data-placeholder="Full Name"></span>
              </div>
            </div>            
          </div>
        </div>
        <div class="scroll-holder">
          <div class="edit-info">
            <div class="edit-field">
              <div class="add-btn">
                <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                mobile phone:<span data-name="phone" contenteditable="true" data-placeholder="add mobile phone"></span>
              </div>
            </div>
            <div class="edit-field">
              <div class="add-btn">
                <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                email:<span data-name="email" contenteditable="true" data-placeholder="add email"></span>
              </div>
            </div>
            <div class="edit-field">
              <button href="#" class="save-contact edit-contact">Save contact</button>
              <button href="#" class="delete-contact edit-contact">Delete contact</button>
            </div>
          </div>
        </div>
      </div>
    `;    
  }
}
