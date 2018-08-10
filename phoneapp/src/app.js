/*
Приложение телефонный справочник

Создайте функцию конструктор.
У данной функции должны быть методы:

Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
Проверка, что телефонный номер содержит только числа
Добавление пользователей в справочник
Удаление пользователя по имени, фамилии
Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
Фильтр по указанному свойству*/


class PhoneApp{
  constructor(){
    this.dataBaseProps = ['id','name','cname','phone'];
    this.dataBase = [
          {id:1, name:'Nafe1', cname:'kname1', phone:'1111111111'},
          {id:2, name:'dame2', cname:'Cname2', phone:'5222222222'},
          {id:3, name:'hame3', cname:'qnbme3', phone:'3333333333'},
          {id:4, name:'aame4', cname:'hname4', phone:'744224444'},
      ]    
  }

  transformNumber(number) {
    let _res = number.replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, '($1) $2-$3-$4');
    return _res;
  }

  _cleanStringValue(name) {  
    return name.toLowerCase().trim()
  }

  _compareStingValue(valueIn,valueBase) {  
    return this._cleanStringValue(valueBase) === this._cleanStringValue(valueIn);
  }

  _compareName(nameIn,nameBase){
    return this._compareStingValue(nameIn,nameBase);
  }
   
  validateNumber(number) {
    let _numberArr = String(number).split('');
    return !_numberArr.some((value) => {
      return isNaN(value);
    });  
  }

  addUser(user) {
    user.id = this.dataBase.length + 1;
    this.dataBase.push(user);
  }

  deleteUser(name) {
    const toDelUserIndex = this.dataBase.findIndex((user) => {
      return this._compareName(user.name,name) || this._compareName(user.cname,name);
    }); 

    if( toDelUserIndex !== -1){
      this.dataBase.splice(toDelUserIndex,1);
    }  
  }

  findUser(name) {
    let userWithName = this.filterBy('name',name);
    let userWithCname = this.filterBy('cname',name);
    return userWithName.concat(userWithCname);
  }

  sortUsersBy(prop) {
    if(!this.dataBaseProps.includes(prop)){
      console.error('Wrong prop');
      return false;
    }
    return this.dataBase.sort((a, b) => {
      const propA = this._cleanStringValue(a[prop]); 
      const propB = this._cleanStringValue(b[prop]); 
      if (propA < propB) {
        return -1;
      }
      if (propA > propB) {
        return 1;
      }
      return 0;
    })
  }

  editUser(id, options) {
    const toEditUserIndex = this.dataBase.findIndex((user) => {
      return user.id === id;
    });
    this.dataBase[toEditUserIndex] = { ...this.dataBase[toEditUserIndex], ...options};
  }

  filterBy(prop, value) {
    let letFilerBy = user => user[prop].indexOf(value) !== -1;
    return this.dataBase.filter(letFilerBy);    
  }
}

const myApp = new PhoneApp();

