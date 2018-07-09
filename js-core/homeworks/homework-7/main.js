'use strict';
/*
 *
 * TASK 1
 *
 * �������� ������� ������� ����� ���������� ������ � ����������
 * ��� ������������ �� �����
 *
 * */
function add(x){
 return function(y){
  return function(z){
   return x+y+z;
  }
 }
}
console.log('Task 1');
 console.log(add(1)(2)(3)); // 6
 console.log(add(10)(5)(15)); // 30

/*
 *
 * TASK 2
 *
 * �������� ������� ������� ���������� ������ � ���� �� ������� �������
 * ��� �������
 * ����� ������� ������ ������ ������ �������(������� �������) � ������� ������ ������������
 * ����� �� 1 ������ ��� ����������
 * ---------------------------------------
 * ��� �� � ������� ������ ���� ����� ��������� ��������
 * ������ ������� �������� � �������, ������
 *
 * */
// patternModule
function patternModule(){
 let counter = 0;
 return {
  add: function(){
   console.log(++counter);
  },
  reseter: function(){
   counter = 0;
  }
 }
}
console.log('Task 2');
let test = patternModule(); // 0
test.add(); //1
test.add(); //2
test.add(); //3
test.reseter();//0
test.add(); //1
/*
 * TASK 1
 *
 * �������� ������� ������� ��������� 4 ���������:
 *
 * -  ������
 * -  ��� �������� � ������� ����������� �����
 * -  ������� ��� ����� ������� ����� *
 * -  ���������� �������������� ������ ( ������� )
 *
 *  ��� ������ ������ ���������� ����� ������������
 *  ����������.
 *  ����� ������������� �������, ������������ ������
 *
 * */// @SUPER,
function coolFunc(obj,prop,maxTime,func){
 let counter = 0;
 let max = maxTime;
 obj[prop] = function(){
  if(counter < max){
   let arr = [];
   for( let i=0; i<arguments.length; i++){
    arr.push(arguments[i]);
   }
   counter++;
   func(arr);
   

  }else{
   console.log('ERROR. Need more counter');
  };
 }
 obj.updateCounter = function(addToCounter){
  max += addToCounter;
 }
 
 return obj;
}
let obj = {};
let func = function(args){

  

 let res = args.reduce(function(acc,value){
 return acc = acc + value;
 },0);
 
 console.log(res);
}
console.log('Task 3');
let newObj = coolFunc(obj,'myFunc',3,func);
newObj.myFunc(1,2,3,4);
newObj.myFunc(9,7,6,4,-4);
newObj.myFunc(9,7,6,4,-4);
newObj.myFunc(9,7,6,4,-4);
newObj.myFunc(9,7,55,6,4,-4);


/*
 * �������� ������� methodCounter, ����������� ����������� �������
 * �� �������� �����
 *
 * */
console.log('Task 4');
newObj.updateCounter(3);
newObj.myFunc(9,7,55,6,4,-4);
newObj.myFunc(9,7,55,6,4,-4);
newObj.myFunc(9,7,55,6,4,-4);
newObj.myFunc(9,7,55,6,4,-4);




