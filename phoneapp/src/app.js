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
  this.dataBase = [
        {id:1, name:'Name1', phone:'1111111111'},
        {id:2, name:'Name2', phone:'2222222222'},
        {id:3, name:'Name3', phone:'3333333333'},
        {id:4, name:'Name4', phone:'4444444444'},
       
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

PhoneApp.prototype._validateNumber = function(number) {
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
  
}

PhoneApp.prototype.findUser = function(name) {}

PhoneApp.prototype.updateUser = function(name) {}

PhoneApp.prototype.sortUsersBy = function(prop) {}

PhoneApp.prototype.editUser = function(id, options) {
  /*
   options.name
   options.
  */  
}


const myApp = new PhoneApp();

