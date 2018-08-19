class ServerAPI{
  constructor(){
    this.url = 'https://easycode-js.herokuapp.com/mamax'
  }
  getUsers(){
    return fetch(this.url + '/users');
  }
  getUser(id){
    return fetch(this.url + '/users/' + id); 
  }
  addUser(data){
    fetch(this.url + '/users' , {
      headers : {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    });    
  }
}
