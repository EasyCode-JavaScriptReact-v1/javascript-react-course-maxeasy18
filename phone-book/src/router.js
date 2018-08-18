class Router {
  constructor(app){
 
    window.addEventListener('popstate', event => {
      // console.log(event.state);
      app.updateState({activePage : event.state.activePage});
      app.changePageToActive();
    });
  }

  gotToPage(state,href){
    window.history.pushState(state,'', href);
  }

}