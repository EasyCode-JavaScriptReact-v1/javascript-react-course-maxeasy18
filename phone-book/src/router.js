class Router {
  constructor(app){
 
    window.addEventListener('popstate', event => {
      // console.log(event.state);
      app.changePageTo(event.state.activePage);
    });
  }

  gotToPage(activePage,href){
    window.history.pushState({activePage:activePage},'', href);
  }

}