/*
 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив

 // solution([ [1, 'a'], [2, 'b'], [3, 'c'] ]) => [ [1, 2, 3], [a, b, c] ]
 // solution([ [1, 3, 5], [2, 4, 6] ]) => [ [1, 2], [3, 4], [5, 6] ]
 // solution([[]]) => []
 [ [ [ ] ] ] = [ [] ]


 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

const solution = arr => {
  return arr.reduce( (acc,value) => {
    value.forEach( (item,index) => {
      if(typeof acc[index] === 'undefined'){
        acc[index] = [];
      }
      acc[index].push(item);
    });
    return acc;
  },[]);
};

console.log(solution([[1, 'a'], [2, 'b'], [3, 'c']]));
console.log(solution([ [1, 3, 5], [2, 4, 6] ]));
console.log(solution([[]]));
console.log(solution([[[]]]));




/*
 Визуализируйте массив, если в коллекции есть свойство
 children,
 тогда создайте вложенный лист

 name - свойство h1
 children ul -> li

 Используйте innerHTML

 */



/*

<h1>Main</h1>
<ul>
  <h1>Catalog</h1>
  <li>
    <ul>
      <h1>Comp</h1>
      <ul>
        <li>
          <h1>Notebook</h1>
          <h1>...</h1>
        </li>
      </ul>
  </li>

*/


const navigation = [
  {name: 'Главная'},
  {
    name: 'Каталог',
    children: [
      {
        name: 'Компьютеры',
        children: [{name: 'Ноутбуки'}, {name: 'Планшеты'}]
      }
    ]
  },
  {name: 'Профиль'}
];

const visualArray = list => {

  const liItems = list.map(item =>
    `<li>
      <h1>
        ${item.name}
      </h1>

    </li>`
  ).join('');

  let createUlElement = list => {
    
    if(!list){
      return '';
    }

    const liItems = list.map(item =>
      `<li>
        <h1>
          ${item.name}
        </h1>
        ${createUlElement(item.children)}
      </li>`
    ).join('');

    return `
      <ul>
        ${liItems}
      </ul>
    `;
  }

  return createUlElement(list);
}

const vizualizedBlock = document.createElement('div');
document.body.appendChild(vizualizedBlock)
vizualizedBlock.innerHTML = visualArray(navigation);
// console.log(visualaze(navigation));


/*  ПРИЛОЖЕНИЕ  */
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/telephone-book
// innerHTML должно быть максимум

/* ТЕСТ */

/*
* Добавьте реальных вопросов про JavaScript с вариантами
* ответов
* */

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса



/* @SUPER-FRONT */

/*
* 4. По нажатию на кнопку(проверить) отобразится "модальное" окно в котором отобразится
* весь тест с отображенными правильными ответами(обозначьте их) и неправильными(тоже обозначьте)
* Отобразите количество правильных и неправильных ответов
* счетчик

* У модального окна будет 2 кнопки "пересдать" и "отправить"
* *
* Если все ответы правильные, кнопка пересдать не активна
* disabled
*
* По нажатию отправить, модальное окно закрывается и на экране надпись "ваши ответы успешно
* отправлены"
*
* --- Если все ответы правильные отобразите картинку
*
* По нажатию на пересдать - появляется снова наш тест сначала
*
* @Super-FRONT @ 2

* При загрузке странице добавьте таймер отсчета с милисекундами -> В модальном окне отобразите
* количество затраченного времени на тест
*
* */
