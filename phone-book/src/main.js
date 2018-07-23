

class PhoneBook {
  constructor(container) {
    this.listHeads = ['Name','Last name','Email'];
    this.container = container;
    this.pageName = 'Contacts';
    this.bottomNavigation = [
      {
        href: "index.html",
        title: "Contacts",
        icon: "search",
      }, 
      {
        href: "keypad.html",
        title: "Keypad",
        icon: "th",
      }, 
      {
        href: "edit-contact.html",
        title: "Edit contact",
        icon: "pencil",
      },
      {
        href: "user.html",
        title: "Add user",
        icon: "user",
      } ,      
      {
        href: "add-user.html",
        title: "Add user",
        icon: "plus",
      }                     
    ];
    this.users = [
      {
        name: "Иван",
        cname: "Петров",
        email: "IvanPetrov@ec.ua"
      },
      {
        name: "Сергей",
        cname: "Сергеев",
        email: "SergeiSergeev@ec.ua"
      },
      {
        name: "Иван",
        cname: "Иванов",
        email: "IvanIvanov@ec.ua"
      },
      {
        name: "Александр",
        cname: "Александров",
        email: "AlexAlex@ec.ua"
      },
      {
        name: "Алекс",
        cname: "Смирнов",
        email: "AlexSmirnov@ec.ua"
      },
      {
        name: "Сергей",
        cname: "Волков",
        email: "VolkovSergey@ec.ua"
      },
      {
        name: "Мария",
        cname: "Шарапова",
        email: "MariyaSharapova@ec.ua"
      },
      {
        name: "Александр",
        cname: "Винник",
        email: "AlexVinnik@ec.ua"
      },
      {
        name: "Дарий",
        cname: "Смирнов",
        email: "DariySmirnov@ec.ua"
      },
      {
        name: "Елена",
        cname: "Лещенко",
        email: "ElenaLeshenko@ec.ua"
      },
      {
        name: "Ольга",
        cname: "Новикова",
        email: "OlgaNovikova@ec.ua"
      },
      {
        name: "Наталья",
        cname: "Шемякина",
        email: "ShemyakinaN@ec.ua"
      },
      {
        name: "Анна",
        cname: "Донцова",
        email: "AnnaDontsova@ec.ua"
      },
      {
        name: "Влад",
        cname: "Яма",
        email: "VladYama@ec.ua"
      },
      {
        name: "Кира",
        cname: "Воробьева",
        email: "Kira1990@ec.ua"
      },
      {
        name: "Виктор",
        cname: "Кривенко",
        email: "ViktorKriv@ec.ua"
      }
    ];

  }

  _makeNode(node,text){
    const nodeElement = document.createElement(node)
    if(!text){
        return nodeElement; 
    }
    nodeElement.innerText = text;
    return nodeElement;
  }

  _makeList(){
    const listOfUsers = this.users.map( user => {
      return `
          <tr>
            <td>${user.name}</td>
            <td>${user.cname}</td>
            <td>${user.email}</td>
          </tr>
      `;
    }).join('');
    return `
      <table class="table table-hover contacts">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
      <tbody>
        ${listOfUsers}
      </tbody>
    </table>

    `;    
  }

  createHeaderSource(){
    return `
        <header class="header">
            <div class="container top-radius">
                <h2>${this.pageName}</h2>
            </div>
        </header>   
    `;
  }
  createMainSource(){
    return `
    <main>
        <div class="container">
            <form class="form-inline search-form">
                <div class="form-group">
                    <label class="sr-only" for="search">Search</label>
                    <input type="text" class="form-control" id= "search" placeholder="Search">
                </div>
            </form>
        </div>
    </main>
    `;    
  }
  
  createFooterSource(){
    const navItems = this.bottomNavigation.map( (value,index) => {
        return `                
        <a href="${value.href}" class="tab">
            <span class="glyphicon glyphicon-${value.icon}" aria-hidden="true"></span>
            <span class = "tab-text">${value.title}</span>
        </a>
        `;
    }).join('');

    return `
    <footer class="footer">
        <div class="container bottom-radius">
            <nav class="main-nav">
                ${navItems}
            </nav>
        </div>
    </footer>
    `;    
  }
  createPhoneSource(){
    return `
    ${this.createHeaderSource()}
    ${this.createMainSource()}
    ${this.createFooterSource()}    
    `;
  }

  renderPhoneBook(){  

    const phoneSource = this.createPhoneSource(); 
    this.container.innerHTML = phoneSource;

    const listContainer = this.container.querySelector('main > .container')
    listContainer.innerHTML = this._makeList();
  }
}

const phoneHolderContainer = document.body.querySelector('body > .container-holder');
const phone = new PhoneBook(phoneHolderContainer);
phone.renderPhoneBook();