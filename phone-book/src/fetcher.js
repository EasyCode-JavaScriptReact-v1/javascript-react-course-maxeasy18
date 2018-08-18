class Fetcher{
  constructor(){
    this.url = 'https://easycode-js.herokuapp.com/mamax'
  }
  getUsers(){
    return fetch(this.url)
      .then( response => {
        return response.json();
      })
      .then(parsedResponse => {
        return parsedResponse.users;
      })
      .catch( alert => {
        // console.error(alert);
      });
 
  }
}
