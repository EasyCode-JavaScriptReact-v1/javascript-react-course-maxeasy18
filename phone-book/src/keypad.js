

class Keypad {
  constructor(containerSelector) {
    this.container = document.body.querySelector(containerSelector);
    this.pageName = 'Keypad';
    this.users = users;
    this.currentNumber = '';
    this.container.addEventListener('click', (event) => {
      this.detectClickedNumber(event);
    });

    this.container.addEventListener('click', (event) => {
      if(event.target.nodeName === 'SPAN' && event.target.classList.contains('delete-number')){
        this.deleteDigitFromNumber();
      }  
    });
    document.addEventListener('keyup', (event) => {
      this.updateNumbersField(event.key);
      if(event.keyCode == 8 ){
        this.deleteDigitFromNumber();
      }
    });
  }

  deleteDigitFromNumber(){
    this.currentNumber = this.currentNumber.slice(0,-1);
    this.updateNumbersField();    
  }

  detectClickedNumber(event){
    if(event.target.nodeName === 'BUTTON' && event.target.classList.contains('key')){
      const number = event.target.innerHTML;
      this.updateNumbersField(number);
    }    
  }

  updateNumbersField(number){
    if( number && /^[\d\*#]$/.test(number) && this.currentNumber.length < 10){
      this.currentNumber += number;
    }
    const formatedNumber = this.formatformNumber(this.currentNumber);
    this.container.querySelector('main span.numbers').innerHTML = formatedNumber
  }

  formatformNumber(number) {
    if(isNaN(number.charAt(0))){
      return number;
    }
    const formatedNumber = number.replace(/(\d{0,3})(\d{0,2})?(\d{0,2})?(\d{0,3})?/, (match,g1,g2,g3,g4) => {
      let res = ''
      if(g1){
        res = `(${g1}`;
      }
      if(g1.length === 3){
        res += `) `;
      }
      if(g2){
        res += `${g2}`;
      }
      if(g3){
        res += `-${g3}`;
      }
      if(g4){
        res += `-${g4}`;
      }
      return res
    });    
    /*
    if(number.length > 0){
      if(number.length < 3){
        res = `(${number}`;
      }else if (number.length < 6) {
        res = number.replace(/(\d{3})(\d{0,2})/, '($1) $2');
      }else if (number.length < 8) {
        res = number.replace(/(\d{3})(\d{0,2})(\d{0,2})/, '($1) $2-$3');
      }else{

      }

    }*/
    return formatedNumber;
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
  <main class="main">
    <div class="container">
      <div class="number">
        <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        <span class="numbers">(050)5005050</span>
        <span class="glyphicon glyphicon-circle-arrow-left delete-number" aria-hidden="true"></span>
      </div>
      <div class="keypad-holder">
        <button class="key">1</button>
        <button class="key">2</button>
        <button class="key">3</button>
        <button class="key">4</button>
        <button class="key">5</button>
        <button class="key">6</button>
        <button class="key">7</button>
        <button class="key">8</button>
        <button class="key">9</button>
        <button class="key">*</button>
        <button class="key">0</button>
        <button class="key">#</button>
        <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
      </div>
    </div>
  </main>
    `;    
  }
  
  _createFooterIcon(iconData){
    return `
    <a href="${iconData.href}" class="tab ${(iconData.active?'active':'')}">
        <span class="glyphicon glyphicon-${iconData.icon}" aria-hidden="true"></span>
        <span class = "tab-text">${iconData.title}</span>
    </a>`    
  }

  createFooterSource(){
    return `
    <footer class="footer">
        <div class="container bottom-radius">
            <nav class="main-nav">
                ${this._createFooterIcon( { href: "index.html",title: "Contacts",icon: "search"})}
                ${this._createFooterIcon( { href: "keypad.html",title: "Keypad",icon: "th", active: true})}
                ${this._createFooterIcon( { href: "edit-contact.html",title: "Edit contact",icon: "pencil"})}
                ${this._createFooterIcon( { href: "user.html",title: "User",icon: "user"})}
                ${this._createFooterIcon( { href: "add-user.html",title: "Add user",icon: "plus"})}
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

  render(){  
    const phoneSource = this.createPhoneSource(); 
    this.container.innerHTML = phoneSource;
  }
}

const keypad = new Keypad('.container-holder');
keypad.render();