/**
 * Created by nadia on 20.08.15.
 */
// стр 59 Задача 1
//не должна добавлять лишних пробелов
    // функция addClass должна добавлять в список класс cls, но только если его там еще нет


var obj = {
    className: 'open menu'
};

var cls = prompt('введите название класса', '');

function addClass(pbj, cls) { //проверить сущ ли имя в калсснейм и проверить тру ли?
    //чтоб не делал дубликаты, разбить сплитить по пробелам и получаем массив уникальных элементов
    // сравниваем индексоф нашего класса кот хотим добавить с массивом
    //пуш добавляем
    //джойн добавляем строку
    cls.concat()
}

console.log(obj.className);

//сделать черетоды массивов (сделать 50 разных св-в) и с помощью манипуляции работы со строкой
// сверить что быстрее
//стр 60 - решение

/** вариант решения задачи 1
 var arr = [5, 7, 4, 8, 3, 0];
 function filterRange(arr, a, b) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] >= a) && (arr[i] <= b)) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
 console.log(filterRange(arr, 3, 5));
 console.log(arr);
 */

//ЗАДАЧКА 2 стра 61
//написать функ toCamelCase(str) - преобразовать оки вида 'my-short-string' в 'myShortString'.
// т.е. дефисы удаляются, а все слова после них получают заглавную букву
//пригодится методы chartAt, split, toUpperCase

//variant

function toCamelStyle(string) {
    var newStringArray = string.split("-");
    for (var i = 0; i < newStringArray.length; i++) {
        var firstChar = newStringArray[i].substring(0,1);
        var newUpperChar = firstChar.toUpperCase();
        var lastPart = newStringArray[i].substring(1);
        newStringArray[i] = newUpperChar + lastPart;
        console.log(newStringArray[i]);
    }

    var result = newStringArray.join('');

    return result;
}
console.log("background-color");


//variant 2
function toCamelCase(string){
    var strTemp, arrTemp = string.split("-");
    for (var count = 1; count < arrTemp.length; count++){
        strTemp = arrTemp[count];
        strTemp = strTemp[0].toUpperCase() + strTemp.substring(1);
        arrTemp[count] = strTemp;
    }
    return arrTemp.join("");
}

// можно вариант сделать с самой строкой не переводя ее в массив (с помощью indexOf)
//решение стр 62


//ЗАДАЧКА 3 стр 63 сортировка
//как можно: сортируем просто, а потом запускаем реверс
// или без реверс , запустить фор в обратном порядке
// усложнить функцию сорта кинуть в него коллбэк - сортировка будет обратная/ сделать в методе сорт без реверса


//ЗАДАЧА стр 71
//map - Вызывает заданную функцию обратного вызова для каждого элемента массива и возвращает массив, содержащий результаты.
//array1.map(callbackfn[, thisArg])

//var
var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
var arrLengths = arr.map(function (arr) {
    return arr.length;
});

console.log(arrLengths)

//var2
var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
var arrLength = [];
arrLength = arr.map(function(name) {
    return name.length;
});
console.log( arrLength ); // 4,5,2,5

//лучше называть arrayItem


//ЗАДАЧА стр 76
// на основании  (это больше списокпсевдо массива arguments, не массив)

function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));


//ЗАДАЧА стр 85

var myDate = new Date(2015, 1, 25, 2, 17, 0);
alert(myDate);

//или
var date = new Date();
date.setFullYear(2015,1,25);
date.setHours(2,17);
console.log(date);