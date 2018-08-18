

class User {
  constructor(appContainer) {
    this.title = "User";
    this.appContainer = appContainer;
  }

  initEvents(){

  }
  
  render(){
    return `
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
    `;    
  }
}
