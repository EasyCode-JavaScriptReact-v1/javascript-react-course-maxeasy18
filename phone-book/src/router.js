class Router {
  constructor(app){
    this.app = app;
    window.addEventListener('popstate', event => {
      // console.log(event.state);
      const popState = { activePage : event.state.activePage };
      if(event.state.userId){
        popState.userId = event.state.userId;
      }

      app.updateState(popState);
      app.changePageToActive();
    });
  }

  gotToPage(state){
    const activePage = this.app.state.activePage;
    const href = this.app.pages[activePage].href;  
    window.history.pushState(state,'', href);
  }

}