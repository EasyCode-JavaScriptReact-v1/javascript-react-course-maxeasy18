class Contacts {
  constructor(app) {
    this.title = "Contacts";
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
        this.insertListOfUsersToApp(this.users);
      }
    }); 
    this.getListOfUsers();  
    this.initSearch(); 
  }

  showUserPage(id){
    let promisWithUsers = [];
    const fetcher = new Fetcher();
    promisWithUsers.push(fetcher.getUser(id));
    Promise.all(promisWithUsers).then( (user) => {
      
    });
  }

  
  initSearch(){
    document.getElementById('search').addEventListener('keyup', (event) => {
      let filteredUsers = this.users;
      if(event.target.value !== ''){
        filteredUsers = this.findUser(event.target.value);
      }
      this.insertListOfUsersToApp(filteredUsers);
    });    
  }

  getListOfUsers(){
    if(this.users.length != 0 ){
      return false;
    }
    const serverAPI = this.app.serverAPI;
    const loadingUsers = serverAPI.getUsers();
    loadingUsers.then( response => {
      return response.json();
    })
    .then(users => {
      this.users = users
      this.insertListOfUsersToApp(this.users);        
    })
    .catch( err => {
      console.error(err.message);
    });
  }

  renderListOfUsers(listOfUsers){
    return listOfUsers.map( user => {
      const name = user.fullName.split(' ')[0];
      const cname = user.fullName.split(' ')[1] || '';
      const id = user._id;
      return `
          <tr data-page='user' data-user-id="${id}">
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
       ${this.renderListOfUsers(this.users)}
      </tbody>
    </table>

    `;    
  }

  insertListOfUsersToApp(listOfUsers){
    const containerForList = this.appContainer.querySelector('table > tbody');
    containerForList.innerHTML = this.renderListOfUsers(listOfUsers);
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

