/**
 Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.

 Например:

 function f(x) {
  alert( x );
}

 var f1000 = delay(f, 1000);
 var f1500 = delay(f, 1500);

 f1000("тест"); // выведет "тест" через 1000 миллисекунд
 f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
 Упрощённо можно сказать, что delay возвращает «задержанный на ms» вариант f.

 В примере выше у функции только один аргумент, но delay должна быть универсальной:
 передавать любое количество аргументов и контекст this.
 */

/**function f(x) {
    alert( x );
}

 var f1000 = delay(f, 1000);
 var f1500 = delay(f, 1500);

 f1000("тест"); // выведет "тест" через 1000 миллисекунд
 f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
 */

function delay(f, ms) {
    return function () {
        var self = this;  //создаем переменные, чтобы они относились не к анонимной функции, а к верхней функции которую ретурним
        var args = arguments;
        setTimeout(function () {
            f.apply(self, args)  //выполнение функции
        }, ms);
    }
}

function f(x) {
    alert(x);
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд


function comp(x, y) {
    return x + y
}
var c1500 = delay(comp, 1500);
var c1000 = delay(comp, 1000);

c1000(7, 8)


/**
 Напишите функцию debounce(f, ms), которая возвращает обёртку, которая передаёт вызов f не чаще, чем раз в ms миллисекунд.

 «Лишние» вызовы игнорируются. Все аргументы и контекст — передаются.

 Например:

 function f() { ... }

 var f = debounce(f, 1000);

 f(1); // выполнится сразу же
 f(2); // игнор

 setTimeout( function() { f(3) }, 100); // игнор (прошло только 100мс)
 setTimeout( function() { f(4) }, 1100); // выполнится
 setTimeout( function() { f(5) }, 1500); // игнор
 Упрощённо можно сказать, что debounce возвращает вариант f, срабатывающий не чаще чем раз в ms миллисекунд.
 */

