

class User {
  constructor(app) {
    this.title = "User";
    this.appContainer = app.appContainer;
    this.app = app;
  }

  initEvents(){

    this.getUser();  

  }
  
  getUser(){

    const userId = this.app.state.userId;
    if(this.user && this.user._id == userId){
      this.fillPageWithUsersData();
      return false;
    }
    const serverAPI = this.app.serverAPI;
    const loadingUser = serverAPI.getUser(userId);
    loadingUser.then( response => {
      return response.json();
    })
    .then(user => {
      this.user = user
      this.fillPageWithUsersData();
    })
    .catch( err => {
      console.error(err.message);
    });

  }

  fillPageWithUsersData(){
    this.updateName();
    this.updateEmail();
    this.updatePhone();
    this.setUserIDtoAttribute();
  }

  updateName(){
    const nameNode = this.app.appContainer.querySelector('main div.user-name');
    nameNode.innerHTML = this.user.fullName

  }

  updatePhone(){
    const phoneNode = this.app.appContainer.querySelector('main div.tel-number > div');
    const formattedNumber = this.app.formatformNumber(this.user.phone);
    phoneNode.innerHTML = formattedNumber;    
  } 

  setUserIDtoAttribute(){
    const editLinks = this.app.appContainer.querySelectorAll("main [data-page='editContact']");
    editLinks.forEach( link => {
      link.setAttribute('data-user-id', this.user._id);
    });

  }
  updateEmail(){

  }

  render(){
    return `
      <div class="container">
        <img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
        <div class="user-name"><span class='loading'>Loading name...</span></div>
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
          <div><span class='loading'>Loading phone number...</span></div>
        </div>
        <div class="options-table">
          <div class ="options-item"><a href="#">Notes</a></div>
          <div class ="options-item"><a href="#">Send message</a></div>
          <div class ="options-item"><a href="#">Share contact</a></div>
          <div class ="options-item"><a href="#">Add to favorites</a></div>
          <div class ="options-item"><a href="#">Share my location</a></div>
          <div class ="options-item"><a href="#">Block this caller</a></div>
          <div class ="options-item"><a href="#" data-page="editContact">Edit User</a></div>
        </div>
      </div>
    `; 
  }
}
