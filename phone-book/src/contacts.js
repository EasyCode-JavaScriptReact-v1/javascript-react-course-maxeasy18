class Contacts {
  constructor(app) {
    this.app = app;
    this.appContainer = app.appContainer;
    this.pageName = 'Contacts';
    this.users = [];
    this.usersOrderDirection = 'asc';    
  }

  initEvents(){
    this.appContainer.querySelector("main > div.container").addEventListener('click', (event) => {
      if(event.target.nodeName === 'TH'){
        let sortBy = event.target.getAttribute("data-name");
        this.users = this.sortUsersBy(sortBy);
        this.usersOrderDirection = this.usersOrderDirection == 'asc' ? 'desc' : 'asc';
        this.updateListOfUsers();
      }
    }); 
    this.initSearch(); 
    this.getListOfUsers();  
    this.initClickOnUser()
  }

  showUserPage(id){
    let promisWithUsers = [];
    const fetcher = new Fetcher();
    promisWithUsers.push(fetcher.getUser(id));
    Promise.all(promisWithUsers).then( (user) => {
      
    });
  }

  initClickOnUser(){
    this.appContainer.querySelector("main > div.container").addEventListener('click', event => {
      const container = event.currentTarget;
      let target = event.target;
      while (target != container) {
        if (target.nodeName == 'TR') {
          const id = target.getAttribute("data-user_id");
          // this.showUserPage(id);
          // this.app.router.setHref('user', '/user.html');
          console.log(id);
          return;
        }
        target = target.parentNode;
      }
    });     

  }
  initSearch(){
    document.getElementById('search').addEventListener('keyup', (event) => {
      if(event.target.value !== ''){
        this.users = this.findUser(event.target.value);
      }
      this.updateListOfUsers();
    });    
  }

  getListOfUsers(){
    if(this.users.length != 0){
      return false;
    }
    let promisWithUsers = [];
    const fetcher = new Fetcher();
    promisWithUsers.push(fetcher.getUsers());
    Promise.all(promisWithUsers).then( (users) => {
      this.users = users[0];
      this.updateListOfUsers();
    });
    // return users;
  }
  renderListOfUsers(){
    return this.users.map( user => {
      const name = user.fullName.split(' ')[0];
      const cname = user.fullName.split(' ')[1] || '';
      const id = user._id;
      return `
          <tr data-user_id="${id}">
            <td>${name}</td>
            <td>${cname}</td>
            <td>${user.email}</td>
          </tr>
      `;
    }).join('');    
  }

  renderContactsList(){
    return `
      <table class="table table-hover contacts">
        <thead>
          <tr>
            <th data-name="fullName">Name</th>
            <th data-name="fullName">Last name</th>
            <th data-name="email">Email</th>
          </tr>
        </thead>
      <tbody>
       ${this.renderListOfUsers()}
      </tbody>
    </table>

    `;    
  }

  updateListOfUsers(){
    const containerForList = this.appContainer.querySelector('table > tbody');
    containerForList.innerHTML = this.renderListOfUsers();
  }

  createMainSource(){
    return `
      <div class="container">
        <form class="form-inline search-form">
            <div class="form-group">
                <label class="sr-only" for="search">Search</label>
                <input type="text" class="form-control search-input" id= "search" placeholder="Search">
            </div>
        </form>
        ${this.renderContactsList()}
      </div>
    `;    
  }
  
 
  
  cleanStringValue(name) {  
    return name.toLowerCase().trim()
  }

  sortUsersBy(prop) {
    const usersOrderDirection = this.usersOrderDirection == 'asc' ? 1 : -1;
    return this.users.sort((a, b) => {
      const propA = this.cleanStringValue(a[prop]); 
      const propB = this.cleanStringValue(b[prop]); 
      if (propA < propB) {
        return -1*usersOrderDirection;
      }
      if (propA > propB) {
        return 1*usersOrderDirection;
      }
      return 0;
    })
  }

  findUser(value, prop) {
    const letFilterBy = user => {
      if(!prop){
        console.log(user);
        return user["fullName"].toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          user["fullName"].toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          user["email"].toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }
      return user[prop].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
    return this.users.filter(letFilterBy);    
  }

  render(){  
    return `
      ${this.createMainSource()}
    `
  }
}

