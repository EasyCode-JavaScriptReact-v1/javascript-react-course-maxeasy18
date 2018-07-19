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


function PhoneApp() {
  this.dataBaseProps = ['id','name','cname','phone'];
  this.dataBase = [
        {id:1, name:'Nafe1', cname:'kname1', phone:'1111111111'},
        {id:2, name:'dame2', cname:'Cname2', phone:'5222222222'},
        {id:3, name:'hame3', cname:'qnbme3', phone:'3333333333'},
        {id:4, name:'aame4', cname:'hname4', phone:'744224444'},
       
    ]
}
PhoneApp.prototype.transformNumber = function(number) {
  let _res = '(';
  let _number = String(number);
  _res += number.slice(0,3);
  _res += ') ';
  _res += number.slice(3,5);
  _res += '-';
  _res += number.slice(5,7);
  _res += '-';
  _res += number.slice(7,10);
  return _res;
}



PhoneApp.prototype._prepareStringValue = function(name) {  
  return name.toLowerCase().trim()
}

PhoneApp.prototype._compareStingValue = function(valueIn,valueBase) {  
  return this._prepareStringValue(valueBase) === this._prepareStringValue(valueIn);
}

PhoneApp.prototype.compareName = PhoneApp.prototype._compareStingValue;
 
PhoneApp.prototype.validateNumber = function(number) {
  let _numberArr = String(number).split('');
  return !_numberArr.some((value) => {
    return isNaN(value);
  });  
}

PhoneApp.prototype.addUser = function(user) {
  user.id = this.dataBase.length + 1;
  this.dataBase.push(user);
}

PhoneApp.prototype.deleteUser = function(name) {
  const toDelUserIndex = this.dataBase.findIndex((user) => {
    return this.compareName(user.name,name) || this.compareName(user.cname,name);
  }); 

  if( toDelUserIndex !== -1){
    this.dataBase.splice(toDelUserIndex,1);
  }  
}

PhoneApp.prototype.findUser = function(name) {
  return this.dataBase.reduce((acc,user) => {
    if(this.compareName(user.name,name)){
      acc.push(user);
    }
    return acc;
  },[]);


}

PhoneApp.prototype.sortUsersBy = function(prop) {
  if(!this.dataBaseProps.includes(prop)){
    console.error('Wrong prop');
    return false;
  }
  return this.dataBase.sort((a, b) => {
    const propA = this._prepareStringValue(a[prop]); 
    const propB = this._prepareStringValue(b[prop]); 
    if (propA < propB) {
      return -1;
    }
    if (propA > propB) {
      return 1;
    }
    return 0;
  })
}

PhoneApp.prototype.editUser = function(id, options) {
  const toEditUserIndex = this.dataBase.findIndex((user) => {
    return user.id === id;
  });
  Object.keys(options).forEach((value) => { 
    this.dataBase[toEditUserIndex][value] = options[value];    
  })
}

PhoneApp.prototype.filterBy = function(prop, value) {
  return this.dataBase.reduce((acc,user) => {
    if( user[prop].indexOf(value) !== -1){
      acc.push(user);
    }
    return acc;

  },[]);
}


const myApp = new PhoneApp();

