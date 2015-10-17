/**
 * У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:

 var obj = {
  className: 'open menu'
};
 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // без изменений
 */

var obj = {
    className : 'open menu';
}

function removeClass(obj, cls){
    var obj = obj;
    var cls = cls;
    var result = [];
    for(var i = 0; i < arguments.length; i++){
        result += arguments.length[i];
    }
    cls = result;
    return delete cls;
}

console.log(removeClass(obj, 'open'));



//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

//pow(3, 2) = 3 * 3 = 9
//pow(3, 3) = 3 * 3 * 3 = 27
//pow(1, 100) = 1 * 1 * ...*1 = 1
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

function pow(x,n){
    var res = x;

    for(var i = 1; i < n; i++){
        res *= x;
    }
    return res;
}


var x = prompt('Enter a number:', '');
var n = prompt('Enter a power:', '');


if(n <= 1){
    alert('power ' + n + "less then 1');
} else alert(pow(x,n));

//alert(x, n);

//console.log(pow(x,n));

function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
    alert('Степень ' + n +
        'не поддерживается, введите целую степень, большую 1'
    );
} else {
    alert( pow(x, n) );
}