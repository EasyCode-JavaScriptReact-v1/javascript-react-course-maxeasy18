class Fetcher{
  constructor(){
    this.url = 'https://easycode-js.herokuapp.com/mamax'
  }
  getUsers(){
    return fetch(this.url + '/users')
      .then( response => {
        return response.json();
      })
      .then(parsedResponse => {
        return parsedResponse;
      })
      .catch( alert => {
        // console.error(alert);
      });
 
  }
  getUser(id){
    return fetch(this.url + '/users/' + id)
      .then( response => {
        return response.json();
      })
      .then(parsedResponse => {
        console.log(parsedResponse);
        return parsedResponse;
      })
      .catch( alert => {
        // console.error(alert);
      });
 
  }  
}
