
console.log(


`
ЧАСТЬ 1

1 http://learn.javascript.ru/task/say-phrase-first
Выведет 'Васяб undefined'. ошибки не будет. определение переменной и функции \"всплывет\", на само значение не запишется"

2 http://learn.javascript.ru/task/which-value-is-modified
Выведет true
если убрать var результат не изменится - true

3. http://learn.javascript.ru/task/var-window
два алерта подряд.
в первом undefined, во втором 5.
Так происходит потому, что сама переменная на момент выполнения кода уже 
существует, но в ней нет значения при первом алерте. 
Второй алерт вызывается после присовения, потому 5.


4. http://learn.javascript.ru/task/call-inplace
Ответил 5.
Хотя и обратил внимание на то что нет точки с запятой.
Однако не был уверен что это выдаст ошибку.


5.http://learn.javascript.ru/task/access-outer-variable
нет, нельзя

6. http://learn.javascript.ru/task/counter-window-variable
1
2
3
4
Это было на уроке. Оба счетчика будут обращатся к одной и той же переменной.




7. http://learn.javascript.ru/task/factorial
function factorial(n){
	return n>1 ? n*factorial(n-1) : 1;

}
`
);

function factorial(n){
	return n>1 ? n*factorial(n-1) : 1;

}
console.log('factorial(5) = ', factorial(5));



console.log(`
8. http://learn.javascript.ru/task/sum-to
function sumTo(n) { 
	return (n*(n+1))/2;
}

`);
function sumTo(n) { 
	return (n*(n+1))/2;
}
console.log('sumTo(6) = ', sumTo(6));

console.log(`
Из предложенных вариантов это смый быстрый, потому что количество операций не зависит от размера аргумента,
в отличие от предыдущих двух вариантов.
рекрсия в 10000? - теоретически - нет ограничений, но не знаю позволит ли яваскрипт и предполагаю, что
обейм выделяемый под число не позволит вписать результат.
`);





