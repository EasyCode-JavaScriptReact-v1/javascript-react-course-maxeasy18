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
}
