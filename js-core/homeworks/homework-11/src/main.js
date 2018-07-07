/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 * */

 function User(){
 	this

 }

 function VerifiedUser(email){
 	
 }

 function Guest(){

 }

 function DataBase(){
 		this.users = []
 		this.register = function(guest){ 			
 			this.users.push(guest);

 		}
 }

 let user = new User();

 let verUser = new VerifiedUser();

 let guest = new Guest();

 verUser.__proto__ = user;

 let dataBase = new DataBase();
