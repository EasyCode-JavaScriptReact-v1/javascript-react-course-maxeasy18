

class AddUser {
  constructor(app) {
    this.title = 'Add User'
    this.app = app;
    this.appContainer = app.appContainer;
  }

  initEvents(){
    
  }

  render(){
    return `
    <div class="container">
      <div class="edit-main-info">
        <div class="edit-foto">
          <button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <span>add foto</span></button>
          </div>
          <div class="main-info-holder">
            <div class="edit-field">
              <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span>Full name</span>
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
                <span>add email</span>
              </button>
            </div>
            <div class="edit-field">
              <button href="#" class="delete-contact">Save contact</button>
            </div>
          </div>
        </div>
      </div>
    `;    
  }
}
