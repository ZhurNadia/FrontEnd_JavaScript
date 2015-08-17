/**Задание 1 (Последовательность Фибоначчи)

 Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2). В ней каждое следующее число
 вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.

 Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.

 Например:

 console.log(fib(3)); //2
 console.log(fib(7)); //13
 console.log(fib(77)); //5527939700884757
 */

//Решение по формуле, используя рекурсию:

function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

alert( fib(3) ); // 2
alert( fib(7) ); // 13
// fib(77); // не запускать - подвисает браузер

/** //подвиснет при вычислени 500
 function fibonacci(n) {
    var num;
    if (n >= 2) {
        num = fibonacci(n - 1) + fibonacci(n - 2);
    } else {
        num = n
    }
    return num;
}
 alert(fibonacci(6)); // >>> 8
 */


/**
function fibonacci2(n) {
    var sq5 = Math.sqrt(5); // сохраняем значение корня из 5, чтобы сэкономить ресурсы
    var a = (1 + sq5) / 2;
    var b = (1 - sq5) / 2;
    return (Math.pow(a, n) - Math.pow(b, n)) / sq5;
}
alert(fibonacci2(500)); // >>> 1.3942322456169767e+104
*/

// после поисков в интернете нашла еще решение через :
function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757

//или
alert(fib(+prompt('Которое число Фибоначчи хотите увидеть?')));

function fib(n) {
    var f, t1, t2;

    for (i = 1; i <= n; i++) {
        f = t1 + t2 || 1;
        t1 = t2;
        t2 = f;
    }
    return f;
}

//Фибрначчи через цикл:

    function Fib(n){
        var a = 1;
        var b = 1;
        var c = a + b;

        for(var i = 4; i <= n; i++){
            a = b;
            b = c;
            c = a + b;
        }
        return c;
    }
alert(Fib(77));