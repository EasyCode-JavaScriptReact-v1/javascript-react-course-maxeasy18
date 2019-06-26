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
    let _temp = arr.reduce( (acc,element) => {
      if(acc[element]){
        acc[element]++ ;
      }else{
        acc[element] = 1;
      }  
      return acc;    
    },{});

    let res = [];
    Object.keys(_temp).forEach( value => {
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
  questions : [
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
    ],
  _createButton(){
    let buttonSubmit = this._makeNode('input');
    buttonSubmit.type = 'submit';
    buttonSubmit.name = 'submit';
    buttonSubmit.value = 'Проверить мои рещультаты';
    return buttonSubmit;  
  },

  _makeNode(node){
    return document.createElement(node);
  },
  _createListOfQuestions(){
    let questionList  = this._makeNode('ol');

    this.questions.forEach((questionObj,questionIndex)=>{
      let questionBlock = this._makeNode('li');
      questionBlock.innerText = questionObj.question;
      
      let answersBlock = this._makeNode('ul');
      questionObj.answers.forEach( (answerText) => {

        let inputAnswer = this._makeNode('input');
        inputAnswer.type = 'checkbox';
        inputAnswer.name = 'answer_question_' + (questionIndex + 1);

        let labelForAnswer = this._makeNode('label');
        labelForAnswer.appendChild(inputAnswer);

        let answerNode = document.createTextNode(answerText);
        labelForAnswer.appendChild(answerNode);

        let answerLi = this._makeNode('li');
        answerLi.appendChild(labelForAnswer);

        answersBlock.appendChild(answerLi);
      });

      questionBlock.appendChild(answersBlock);
      questionList.appendChild(questionBlock);
    });    
    return questionList;
  },
  _initContainer(){
    let div = this._makeNode('div');
    div.setAttribute("class", "test-block"); 
    return div;   
  },
  _createHead(){
    let head = this._makeNode('p');
    head.innerText = 'Тест по програмированию'
    return head
  },
  render(){
    let container = this._initContainer();
    let formHeader = this._createHead();
    let form = this._makeNode('form');
    let questionList = this._createListOfQuestions();
    let submitButton = this._createButton();
    let buttonBlock = this._makeNode('p');
    buttonBlock.appendChild(submitButton);
    form.appendChild(questionList).appendChild(buttonBlock);
    container.appendChild(formHeader);  
    container.appendChild(form);
    document.body.appendChild(container);
  }
}

app.render();