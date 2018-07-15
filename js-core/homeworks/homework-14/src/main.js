/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/


function solution(arr){
    let _temp = {}
    arr.forEach( function(element, index) {
      if(_temp[element]){
        _temp[element]++ ;
      }else{
        _temp[element] = 1;
      }      
      // statements
    });

    let res = [];

    Object.keys(_temp).forEach(function(value){
      if(_temp[value] % 2 !== 0){
        res.push(value);
      }
    });

    return res;

}
console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]));
console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
console.log(solution([2, 2, 44, 44]));



const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* TASK - 1
Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 Сделайте несколько вызовов данной функции
 *
 * */

let replaceInfo = [
  {
    template: '%%HOMEDIR%%',
    templateFlags: 'gmi',
    replaceString: './JavaScript-Basic'
  },
    {
    template: '%%APP_DIR%%',
    templateFlags: 'gmi',
    replaceString: 'fixtures/src'
  },
    {
    template: '%%APPNAME%%',
    templateFlags: 'gmi',    
    replaceString: 'app.js'
  }
]

function grandReplace(string, data){
  let res = string;

  return data.reduce(function(acc,elem){
    let regexp = new RegExp(elem.template,elem.templateFlags);
    return acc.replace(regexp,elem.replaceString)
  },string);
}

console.log(grandReplace(someWebpackModule,replaceInfo));


/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/





/*
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>,
  вызывая методы объекта нужно создать dom-элементы
*/
let app = {
  render(){
  let div = document.createElement('div');
  div.setAttribute("class", "test-block");

  let head = document.createElement('p');
  head.innerText = 'Тест по програмированию'
  div.appendChild(head);

  let form = document.createElement('form');
  
  let questionList  = document.createElement('ol');

  let questions = [
    {
      question : 'Вопрос номер 1',
      answers: [
        'вариант ответа 1',
        'вариант ответа 2',
        'вариант ответа 3'
      ]
    },
    {
      question : 'Вопрос номер 2',
      answers: [
        'вариант ответа 1',
        'вариант ответа 2',
        'вариант ответа 3'
      ]
    },
    {
      question : 'Вопрос номер 3',
      answers: [
        'вариант ответа 1',
        'вариант ответа 2',
        'вариант ответа 3'
      ]
    }    
  ]

  questions.forEach((questionObj,questionIndex)=>{
    let questionBlock = document.createElement('li');
    questionBlock.innerText = questionObj.question;
    
    let answersBlock = document.createElement('ul');

    questionObj.answers.forEach( (answerText) => {

      let answerLi = document.createElement('li');
      let labelForAnswer = document.createElement('label');

      let inputAnswer = document.createElement('input');
      inputAnswer.type = 'checkbox';
      inputAnswer.name = 'answer_question_' + (questionIndex + 1);

      labelForAnswer.appendChild(inputAnswer);

      let answerNode = document.createTextNode(answerText);
      labelForAnswer.appendChild(answerNode);
      answerLi.appendChild(labelForAnswer);

      // answer.innerText = answerText;
      answersBlock.appendChild(answerLi);
    });

    questionBlock.appendChild(answersBlock);


    questionList.appendChild(questionBlock);


  });


  let buttonBlock = document.createElement('p');

  let buttonSubmit = document.createElement('input');
  buttonSubmit.type = 'submit';
  buttonSubmit.name = 'submit';
  buttonSubmit.value = 'Проверить мои рещультаты'
  
  buttonBlock.appendChild(buttonSubmit);

  form.appendChild(questionList).appendChild(buttonBlock);

  div.append(form);

  document.body.appendChild(div);
  // console.log(div);

  }
}


app.render();