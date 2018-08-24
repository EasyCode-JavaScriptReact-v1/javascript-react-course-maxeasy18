const app = {
  questions : [
      {
        id : 1,
        question : 'Сколько типов данных в JS',
        answers: [
          '5',
          '6',
          '7'
        ],
        correctAnswer : ['6']

      },
      {
        id : 2,
        question : 'Методом чего является функция slice',
        answers: [
          'массив',
          'число',
          'объект'
        ],
        correctAnswer : ['массив']   
      },
      {
        id : 3,        
        question : 'var y = 1, x = y = typeof x; x;',
        answers: [
          '1',
          'number',
          'undefined'
        ],
        correctAnswer : ['undefined']
      }    
    ],
  _createButton(){
    const buttonSubmit = this._makeNode('input');
    buttonSubmit.type = 'submit';
    buttonSubmit.name = 'submit';
    buttonSubmit.value = 'Проверить мои рещультаты';
    return buttonSubmit;  
  },

  _makeNode(node){
    return document.createElement(node);
  },
  _createListOfQuestions(){
    const questionList  = this._makeNode('ol');

    this.questions.forEach((questionObj,questionIndex)=>{
      const questionBlock = this._makeNode('li');
      questionBlock.innerHTML = `${questionObj.question} <span class="status"></span>`;
      
      const answersBlock = this._makeNode('ul');
      questionObj.answers.forEach( (answerText,index) => {

        const inputAnswer = this._makeNode('input');
        inputAnswer.type = 'checkbox';
        inputAnswer.name = `question_${questionObj.id}_answer_${index}`  ;

        const labelForAnswer = this._makeNode('label');
        labelForAnswer.appendChild(inputAnswer);

        const spanForAnswer = this._makeNode('span');
        spanForAnswer.textContent = answerText

        labelForAnswer.appendChild(spanForAnswer);

        const answerLi = this._makeNode('li');
        answerLi.appendChild(labelForAnswer);

        answersBlock.appendChild(answerLi);
      });

      questionBlock.appendChild(answersBlock);
      questionList.appendChild(questionBlock);
    });    
    return questionList;
  },
  _initContainer(){
    const div = this._makeNode('div');
    div.setAttribute("class", "test-block"); 
    return div;   
  },
  _createHead(){
    const head = this._makeNode('p');
    head.innerText = 'Тест по програмированию'
    return head
  },
  checkAnswer(){
    const questionsElements = document.body.querySelectorAll('ol ul');
    questionsElements.forEach( (element, index) => {
      let haveMistakes = true;
      const questionNumber = element.querySelector('label > input').name.split('_')[1];
      const answersCkeckboxes = element.querySelectorAll('li > label > input:checked');
      const questionWeWork = this.questions.filter( question => {
        return question.id == questionNumber;
      })[0];
      if(answersCkeckboxes.length){
        haveMistakes = [...answersCkeckboxes].some( answersCkeckbox => {
          const answerText = answersCkeckbox.nextElementSibling.innerText;
          return questionWeWork.correctAnswer.indexOf(answerText) === -1;
        });
      }
      const newStatus = 'status' + (haveMistakes ? ' wrong' : ' correct');
      element.parentElement.querySelector('span.status').className = newStatus
    });
  },
  render(){
    const container = this._initContainer();
    const formHeader = this._createHead();
    const form = this._makeNode('form');
    const questionList = this._createListOfQuestions();
    const submitButton = this._createButton();
    submitButton.onclick = () => {
      this.checkAnswer();
      return false;
    }
    const buttonBlock = this._makeNode('p');
    buttonBlock.appendChild(submitButton);
    form.appendChild(questionList).appendChild(buttonBlock);
    container.appendChild(formHeader);  
    container.appendChild(form);
    document.body.appendChild(container);
  }
}

app.render();