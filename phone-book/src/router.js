class Router {
  constructor(app){
    this.setHref(app,'/index.html');
    const tabs = app.appContainer.querySelector("nav.main-nav");
    tabs.addEventListener('click', (event) => {
      event.preventDefault();
      const container = event.currentTarget;
      let target = event.target;
      while (target != container) {
        if (target.nodeName == 'A' && target.classList.contains('tab') ) {
          const href = target.href;
          app.state.activePage = target.getAttribute("data-page");
          this.setHref(app,href);
          return;
        }
        target = target.parentNode;
      }
    });
    window.addEventListener('popstate', event => {
      app.changePageTo(event.state.currentPage);
    });
  }

  setHref(app,href){
    window.history.pushState({currentPage:app.state.activePage},'', href);
    app.changePageTo(app.state.activePage);
  }

}