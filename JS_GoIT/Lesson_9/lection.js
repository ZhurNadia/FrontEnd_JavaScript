/**
 * Created by nadia on 01.09.15.
 */
//задача 9.1 стр 26
function f() {
    alert( this );
}
var user = {
    g: f.bind('Hello')
};

user.g();  //выведет Hello

//зад 9.2 стр 27
function f() {
    alert(this.name);
}

f = f.bind( {name: 'Вася'} ).bind( {name: 'Петя' } );

f(); //выведет Васю, т.к. после присвоения Васи дальше байнд не имеет смысла так как f уже присвоено Вася

// зад 9.3
function sayHi() {
    alert( this.name );
}
sayHi.test = 5;
alert( sayHi.test ); // 5
var bound = sayHi.bind({
    name: 'Вася'
});
alert( bound.test ); // что выведет?  --> выведет undefined. Bind видит только то, что внутри функции больше ничего


//стр 32 декоратор-таймер

var timers = {};// прибавит время выполнения f к таймеру timers[timer]
function timingDecorator(f, timer) {  // в f будут хранится все присвоенные числа
    return function() {
        var start = performance.now();
        var result = f.apply(this, arguments); // (*)выполняются то что выполнены
        if (!timers[timer]) timers[timer] = 0; // при первом пргоне функции не существует псевдонима функции и мы ему присваиваем 0? в след.прогоне уже будет добавлена след.строка
        timers[timer] += performance.now() - start;
        return result;
    }
}

var timers = {};
function dec(x) {
    return x*10;
}

dec = timingDecorator(dec, 'decimal');

dec(3)
dec(7)
dec(5)


// задача 9.4 стп 35
/*Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает аргументы
в log, а затем передает вызов в f.
*/
function work(a) { // work - произвольная функция, один аргумент
    return a * 2; //умножает аргум на 2 и возвращает
}

function makeLogging(f, log) {
    function wrap (a) {
        log.push(a);
        return f.call(this, a);  //вызовется функция с указанным аргументом
    }
    return wrap;
}
var log = []; //в массив лог будет писать заданные далие значения
work = makeLogging(work, log);
work(1); // 1, добавлено в log
work(5); // 5, добавлено в log
console.log(log); // [1,5]
