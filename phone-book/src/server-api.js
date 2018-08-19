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
    return fetch(this.url + '/users' , {
      headers : {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    });    
  }
  deleteUser(id){
    return fetch(this.url + '/users/' + id , {
      method: "DELETE",
    });     
  }
  updateUser(data){
    return fetch(this.url + '/users/' + data.userId , {
      headers : {
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify(data)
    });    
  }  
}
