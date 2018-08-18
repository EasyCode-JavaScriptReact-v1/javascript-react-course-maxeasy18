class EditContact {
  constructor(appContainer) {
    this.title = 'Edit Contact';
    this.appContainer = appContainer;
  }

  initEvents(){
    const editButtons = this.appContainer.querySelectorAll('a.add-btn');
    editButtons.forEach(( value ) => {
      value.children[1].contentEditable = 'true';
    });
    this.appContainer.addEventListener('click', (event) => {
      event.preventDefault();
      if( event.target.nodeName == 'A' && event.target.classList.contains('add-btn')){
        event.target.children[1].backgroundColor = 'purple';
      }
    });    
  }

  render(){
    return `
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
    `;    
  }
  
}
